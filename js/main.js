(function (window, L) {

    const url = 'https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec';

    let position = getPosition();
    let mapLatLng = position.latLng;
    let mapZoom = position.zoom;

    let map = L.map('map');
    let task_icon = {};
    let layer_group = {};
    let layer_control = L.control.layers({}, {}, {
        position: "bottomleft",
        collapsed: false
    }).addTo(map);

    let locate_status = false;
    let locate_control;


    let streets = L.tileLayer('https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW', {
        subdomains: "012",
        maxZoom: 20,
        attribution: 'Map data: &copy; Google',
        fixed: true
    });

    let locate = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            locate_control = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');


            locate_control.style.backgroundColor = 'white';
            locate_control.style.backgroundImage = "url(img/location.png)";
            locate_control.style.backgroundSize = "30px 30px";
            locate_control.style.width = '30px';
            locate_control.style.height = '30px';

            locate_control.onclick = function () {
                this.classList.toggle("leaflet-control-locate");
                if (!locate_status) {
                    locateMe();
                } else {
                    stopLocateMe();
                }

            }

            return locate_control;
        }
    });

    let relaod = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            let container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

            container.style.backgroundColor = 'white';
            container.style.backgroundImage = "url(img/reload.png)";
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function () {
                onLoad()
            }

            return container;
        }
    });

    map.addLayer(streets)
        .addControl(new locate())
        .addControl(new relaod())
        .on('load', onLoad)
        .on('moveend', setPosition)
        .on('locationfound', onLocationFound)
        .setView(mapLatLng, mapZoom);

    // 地圖建立時執行
    function onLoad() {
        getData();
        setPosition();
    }

    // 抓取資料
    function getData() {

        Promise.all([getTasks(), getExistingData()])
            .then((d) => {
                let tasks = d[0];
                getIcons(tasks);

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

        const line_text = `
        ${new Date().toLocaleDateString()}
        ${reward.site_name}
        ${reward.task}
        ${reward.address}
        https://www.google.com.tw/maps/place/${reward.lat},${reward.lng}
        `

        // 行動裝置語法
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            href = "http://line.naver.jp/R/msg/text/?" + line_text + "%0D%0A" + url;
        } else {
            // 網頁版語法
            href = "https://lineit.line.me/share/ui?url=" + encodeURIComponent(url);
        }

        var show_msg = `
            <div class='pokestops'>
                <h3>${reward.site_name}</h3>
                <hr>
                <b>${task[0]}</b><br>✔️：${reward['T&F'].T}, ❌：${reward['T&F'].F}
                <div class="crop">
                    <img src="http://images.weserv.nl/?url=${reward.image.replace(/^https?\:\/\//g, '')}&w=70&h=70&il&trim=10&t=squaredown">
                </div>
                <a href=${googleNavigation} target="_blank" style="font-size: 1.5em;">🚘google導航</a><br>
                <a href=${href} target='_blank'><img src=${img}></a>
            </div>
        `

        layer_group[task[1]].push(
            L.marker([reward.lat, reward.lng], {
                icon: task_icon[task[1]]
            }).bindPopup(show_msg)
        )

    }

    // 開始定位
    function locateMe() {

        locate_status = true;

        map.locate({
            setView: true,
            watch: true,
            maxZoom: 16
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

    // 取得任務清單
    function getExistingData() {
        return fetch(`${url}?method=get_existing_data`).then(d => d.json());
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

    // 取得querystring參數
    // function getParameterByName(name, url) {
    //     if (!url) url = window.location.href;
    //     name = name.replace(/[\[\]]/g, "\\$&");
    //     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    //         results = regex.exec(url);
    //     if (!results) return null;
    //     if (!results[2]) return '';
    //     return decodeURIComponent(results[2].replace(/\+/g, " "));
    // }

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