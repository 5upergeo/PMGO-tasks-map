(function (window, L) {

    const url = 'https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec';
    let return_task_url = 'https://script.google.com/macros/s/AKfycbzMvd730XVRRCoEL13052qsOC81kwPKeWRWZJV9B60e59nXCDLZ/exec'

    let position = getPosition();
    let mapLatLng = position.latLng;
    let mapZoom = position.zoom;

    let map = L.map('map', {
        attributionControl: false
    });
    let task_icon = {};
    let layer_group = {};
    let layer_control = L.control.layers({}, {}, {
        position: "bottomleft",
        collapsed: false
    }).addTo(map);

    let locate_status = false;

    let streets = L.tileLayer('https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW', {
        subdomains: "012",
        maxZoom: 20,
        attribution: 'Map data: &copy; Google',
        fixed: true
    });

    // 定位
    let locate_control = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            let control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

            control.style.backgroundColor = 'white';
            control.style.backgroundImage = "url(img/location_64.png)";
            control.style.backgroundSize = "30px 30px";
            control.style.width = '30px';
            control.style.height = '30px';

            control.onclick = function () {
                this.classList.toggle("use");
                if (!locate_status) {
                    locateMe();
                } else {
                    stopLocateMe();
                }
            }

            return control;
        }
    });

    // 重新讀取數據
    let relaod_control = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            let container = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

            container.style.backgroundColor = 'white';
            container.style.backgroundImage = "url(img/reload_64.png)";
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function () {
                onLoad();
            }

            return container;
        }
    });

    // 回報任務
    let return_task_control = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            let control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom return_task');

            control.style.backgroundColor = 'white';
            control.style.backgroundImage = "url(img/add_64.png)";
            control.style.backgroundSize = "30px 30px";
            control.style.width = '30px';
            control.style.height = '30px';

            control.onclick = function () {

                Promise.all([getLineInfo()])
                .then((d) => {
                    let profile = d[0];
                    
                    localStorage.removeItem('LineID');

                    if (!profile.success){
                        alert('請透過加入Line機器人[oh?]，啟動回報權限。')
                    } else {

                        let user_info = document.getElementById('Line_displayName');
                        user_info.value = profile.displayName;
                        user_info.dataset.LineID = profile.userId;

                        let conter = map.getCenter();
                        // http://127.0.0.1:5000/
                        // https://pokestop-taiwan-2.herokuapp.com/
                        const url = `https://pokestop-taiwan-1.herokuapp.com/get_bbox_sites/${conter.lat}/${conter.lng}`
                        fetch(url)
                            .then(d => d.json())
                            .then(
                                d => setPokestops(d)
                            );

                        this.classList.toggle("use");
                        document.getElementsByClassName('select_task')[0].classList.toggle("hide");

                    }
                })

            }

            return control;
        }
    });

    // 回報說明
    let return_task_info = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            let control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

            control.style.backgroundColor = 'white';
            control.style.backgroundImage = "url(img/info_64.png)";
            control.style.backgroundSize = "30px 30px";
            control.style.width = '30px';
            control.style.height = '30px';

            control.onclick = function () {
                this.classList.toggle("use");
                document.getElementsByClassName('info')[0].classList.toggle("hide");
            }

            return control;
        }
    });

    map.addLayer(streets)
        .addControl(new locate_control())
        .addControl(new relaod_control())
        .addControl(new return_task_control())
        .addControl(new return_task_info())
        .on('load', onLoad)
        .on('moveend', setPosition)
        .on('locationfound', onLocationFound)
        .setView(mapLatLng, mapZoom);

    // 地圖建立時執行
    function onLoad() {
        getData();
        setPosition();
    }

    function return_task() {

        let LineID =document.getElementById('Line_displayName').dataset.LineID;
        let pokestop_info = document.getElementById('pokestops_nearby').value.split('＠');
        let task = document.getElementById('tasks').value;

        fetch(return_task_url, {
                method: "POST",
                body: `LineID=${LineID}&pokestop=${encodeURIComponent(pokestop_info[0])}&lat=${encodeURIComponent(pokestop_info[1])}&lng=${encodeURIComponent(pokestop_info[2])}&image=${encodeURIComponent(pokestop_info[3])}&task=${encodeURIComponent(task)}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(d => d.json())
            .then(d => {
                if (d.success){
                    onLoad();
                }
                document.getElementsByClassName('return_task')[0].classList.toggle("use");
                document.getElementsByClassName('select_task')[0].classList.toggle("hide");
            });
    }

    document.getElementById('return_task').onclick = return_task;

    // 抓取資料
    function getData() {

        Promise.all([getTasks(), getExistingData(), getTasksFull()])
            .then((d) => {
                let tasks = d[0];
                getIcons(tasks);
                setTasks(d[2]);
                // , getTasksFull()

                // markers = [];
                let reports = d[1];
                reports.forEach(setRewards);

                map.eachLayer(function (layer) {
                    if (!layer.options.fixed) {
                        map.removeLayer(layer);
                    }
                });

                let overlayMaps = Object.keys(layer_group).reduce((all, reward) => {
                    let layer = L.layerGroup(layer_group[reward], {
                        fixed: false
                    });
                    map.addLayer(layer);
                    all[`<img src="./img/${reward}_.png" class="controlIcon">`] = layer;
                    return all
                }, {});

                map.removeControl(layer_control);

                layer_control = L.control.layers({}, overlayMaps, {
                    position: "bottomleft",
                    collapsed: false
                }).addTo(map);
            });
    }

    // 產製任務回報
    function setTasks(tasks) {
        let select_tasks = document.getElementById('tasks');

        const results = '<option value="請選擇任務">請選擇任務</option>' + tasks
            .map(task => `<option value="${task}">${task}</option>`)
            .join('');
        select_tasks.innerHTML = results;
    }

    // 產製附近站點
    function setPokestops(pokestops) {
        let pokestops_nearby = document.getElementById('pokestops_nearby');

        const results = '<option value="請選擇補給站">請選擇補給站</option>' + pokestops
            .map(pokestop => `
            <option value="${pokestop.poke_title}＠${pokestop.poke_lat}＠${pokestop.poke_lng}＠${pokestop.poke_image}">
                ${pokestop.poke_title}
            </option>`)
            .join('');
        pokestops_nearby.innerHTML = results;
    }

    // 產生圖示物件
    function getIcons(tasks) {
        tasks.forEach((task) => {
            task_icon[task] = L.icon({
                iconUrl: `./img/${task}_.png`,
                iconSize: [48, 48],
                iconAnchor: [24, 24],
                popupAnchor: [0, -18]
            });

            layer_group[task] = [];
        });
    }

    // 產製點位
    function setRewards(reward) {
        let task = reward.task.split('：');

        var googleNavigation = navigation(`${reward.lat},${reward.lng}`, `25.046266,121.517406`);

        const img = "https://media.line.me/img/web/zh_TW/lineit_select_line_icon_01.png"; // line 按鈕圖示
        const url = `https://5upergeo.github.io/PMGO-tasks-map/?lat=${reward.lat}&lng=${reward.lng}`

        const share_text = `${new Date().toLocaleDateString()}\n${reward.site_name}\n${reward.task}\n${reward.address}\ngoogle map：\nhttps://www.google.com.tw/maps/place/${reward.lat},${reward.lng}\n地圖連結：\n${url}`;

        // 行動裝置語法
        // if (navigator.userAgent.match(/(android|iphone|ipod|ipad);?/i)) {
        const href = "line://msg/text/" + encodeURIComponent(share_text);
        // } else {
        //     const href = "http://line.naver.jp/R/msg/text/?" + encodeURIComponent(share_text);
        // }

        var show_msg = `
            <div class='pokestops'>
                <h3>${reward.site_name}</h3>
                <hr>
                <b>${task[0]}</b><br>✔️：${reward['T&F'].T}, ❌：${reward['T&F'].F}
                <div class="crop">
                    <!-- <img src="https://images.weserv.nl/?url=${reward.image.replace(/^https?\:\/\//g, '')}&w=70&h=70&il&trim=10&t=squaredown">  -->
                    <img src="${reward.image}">
                </div>
                <a href=${googleNavigation} target="_blank">🚘google導航</a><br>
                <a href=${href} target='_blank' class="line_share"><img src=${img}></a>
                <a href="#" class="web_share" onclick="copy_text(this)" data-share_text = '${share_text}'>複製分享文字</a>
            </div>
        `

        window.copy_text = function(e){

            var clip_area = document.createElement('textarea');
            clip_area.textContent = e.dataset.share_text;
          
            document.body.appendChild(clip_area);
            clip_area.select();
              
            document.execCommand('copy');
            clip_area.remove();
        }

        try {
            layer_group[task[1]].push(
                L.marker([reward.lat, reward.lng], {
                    // icon: task_icon[task[1]]
                    icon: L.divIcon({
                        className: (reward['T&F'].F - reward['T&F'].T) >= 1 ? "map-marker-fake map-marker" : "map-marker",
                        iconSize: [48, 48],
                        iconAnchor: [24, 24],
                        popupAnchor: [0, -18],
                        html: `<div><img src="./img/${task[1]}_.png"></div>`
                    }),
                }).bindPopup(show_msg)
            )
        }
        catch(err) {
            console.log('又有人回報舊任務惹QAQ');
        }


    }

    // 開始定位
    function locateMe() {

        locate_status = true;

        map.locate({
            setView: true,
            watch: true,
            maxZoom: 20
        });

        window.red = L.marker(mapLatLng, {
            icon: L.icon({
                iconUrl: './img/pikachu.gif',
                iconSize: [30, 48],
                iconAnchor: [15, 24]
            }),
            fixed: true
        }).addTo(map);

        window.red._icon.style.display = 'block';
    }

    // 取消訂位
    function stopLocateMe() {
        locate_status = false;
        map.stopLocate();

        window.red._icon.style.display = 'none';
    }

    // 取得任務總類清單
    function getTasks() {
        return fetch(`${url}?method=get_tasks`).then(d => d.json());
    };

    // 取得任務總類清單
    function getTasksFull() {
        return fetch(`${url}?method=get_tasks_full`).then(d => d.json());
    };

    // 取得任務清單
    function getExistingData() {
        return fetch(`${url}?method=get_existing_data`).then(d => d.json());
    }

    // 取得任務清單
    function getLineInfo() {
        const urlParams = new URLSearchParams(location.search);
        const LineID = urlParams.get('LineID') || "";
        return fetch(`${return_task_url}?method=get_profile&LineID=${LineID}`).then(d => d.json());
    }

    // 監聽GPS訊號
    function onLocationFound(e) {
        window.red.setLatLng(e.latlng);
    }

    //導航連結
    function navigation(LngLat, GPSLocation) {
        if (navigator.userAgent.match(/android/i)) {
            return "google.navigation:q=" + LngLat + "&mode=d";
        } else if (GPSLocation == 'undefined,undefined') {
            return "http://maps.google.com?q=" + LngLat;
        } else {
            if (navigator.userAgent.match(/(iphone|ipod|ipad);?/i)) {
                return "comgooglemaps://?saddr=&daddr=" + LngLat + "&directionsmode=Driving&zoom=15";
            } else {
                return 'https://www.google.com.tw/maps/dir/' + LngLat + '/' + GPSLocation + '/@24,120.5,10z/data=!3m1!4b1!4m2!4m1!3e0';
            }
        };
        return "";
    }

    // 取得座標(querystring -> localStorage -> 北車)
    function getPosition() {

        const urlParams = new URLSearchParams(location.search);

        const lat = urlParams.get('lat') || localStorage.getItem('lat') || 25.046266;
        const lng = urlParams.get('lng') || localStorage.getItem('lng') || 121.517406;
        const zoom = urlParams.get('zoom') || localStorage.getItem('zoom') || 15;

        return {
            latLng: [+lat, +lng],
            zoom: +zoom,
        };
    };

    // 儲存當下座標至localStorag
    function setPosition() {
        if (!map) {
            return;
        }

        let geo = map.getCenter();
        let [lat, lng] = [geo.lat, geo.lng];

        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
        localStorage.setItem('zoom', map.getZoom());
    };

})(window, L)