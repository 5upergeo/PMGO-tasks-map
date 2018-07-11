(function (window, L) {

    var url = 'https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec';

    var position = getPosition();
    var mapLatLng = position.latLng;
    var mapZoom = position.zoom;

    var map = L.map('map', {
        attributionControl: false
    });
    var task_icon = {};
    var layer_group = {};
    var layer_control = L.control.layers({}, {}, {
        position: "bottomleft",
        collapsed: false
    }).addTo(map);

    var locate_status = false;

    var streets = L.tileLayer('https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW', {
        subdomains: "012",
        maxZoom: 20,
        attribution: 'Map data: &copy; Google',
        fixed: true
    });

    // 定位
    var locate_control = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function onAdd(map) {
            var control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

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
            };

            return control;
        }
    });

    // 重新讀取數據
    var relaod_control = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function onAdd(map) {
            var container = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

            container.style.backgroundColor = 'white';
            container.style.backgroundImage = "url(img/reload_64.png)";
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function () {
                onLoad();
            };

            return container;
        }
    });

    // 回報任務
    // let return_task_control = L.Control.extend({

    //     options: {
    //         position: 'topleft'
    //     },

    //     onAdd: function (map) {
    //         control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom return_task');

    //         control.style.backgroundColor = 'white';
    //         control.style.backgroundImage = "url(img/add_64.png)";
    //         control.style.backgroundSize = "30px 30px";
    //         control.style.width = '30px';
    //         control.style.height = '30px';

    //         control.onclick = function () {
    //             let conter = map.getCenter();
    //             // http://127.0.0.1:5000/
    //             // https://pokestop-taiwan-2.herokuapp.com/
    //             const url = `https://pokestop-taiwan-2.herokuapp.com/get_bbox_sites/${conter.lat}/${conter.lng}`
    //             fetch(url)
    //                 .then(d => d.json())
    //                 .then(
    //                     d => setPokestops(d)
    //                 );

    //             this.classList.toggle("use");
    //             document.getElementsByClassName('select_task')[0].classList.toggle("hide");
    //         }

    //         return control;
    //     }
    // });

    // 回報說明
    var return_task_info = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function onAdd(map) {
            var control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

            control.style.backgroundColor = 'white';
            control.style.backgroundImage = "url(img/info_64.png)";
            control.style.backgroundSize = "30px 30px";
            control.style.width = '30px';
            control.style.height = '30px';

            control.onclick = function () {
                this.classList.toggle("use");
                document.getElementsByClassName('info')[0].classList.toggle("hide");
            };

            return control;
        }
    });

    map.addLayer(streets).addControl(new locate_control()).addControl(new relaod_control())
    // .addControl(new return_task_control())
    .addControl(new return_task_info()).on('load', onLoad).on('moveend', setPosition).on('locationfound', onLocationFound).setView(mapLatLng, mapZoom);

    // 地圖建立時執行
    function onLoad() {
        getData();
        setPosition();
    }

    // function return_task() {

    //     let pokestop_info = document.getElementById('pokestops_nearby').value.split('＠');
    //     let task = document.getElementById('tasks').value;

    //     fetch(url, {
    //             method: "POST",
    //             body: `pokestop=${encodeURIComponent(pokestop_info[0])}&lat=${encodeURIComponent(pokestop_info[1])}&lng=${encodeURIComponent(pokestop_info[2])}&image=${encodeURIComponent(pokestop_info[3])}&task=${encodeURIComponent(task)}`,
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         })
    //         .then(d => d.json())
    //         .then(d => {
    //             if (d.success){
    //                 onLoad();
    //             }
    //             document.getElementsByClassName('return_task')[0].classList.toggle("use");
    //             document.getElementsByClassName('select_task')[0].classList.toggle("hide");
    //         });
    // }

    // document.getElementById('return_task').onclick = return_task;

    // 抓取資料
    function getData() {

        Promise.all([getTasks(), getExistingData()]).then(function (d) {
            var tasks = d[0];
            getIcons(tasks);
            // setTasks(d[2]);
            // , getTasksFull()

            // markers = [];
            var reports = d[1];
            reports.forEach(setRewards);

            map.eachLayer(function (layer) {
                if (!layer.options.fixed) {
                    map.removeLayer(layer);
                }
            });

            var overlayMaps = Object.keys(layer_group).reduce(function (all, reward) {
                var layer = L.layerGroup(layer_group[reward], {
                    fixed: false
                });
                map.addLayer(layer);
                all['<img src="./img/' + reward + '_.png" class="controlIcon">'] = layer;
                return all;
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
        var select_tasks = document.getElementById('tasks');

        var results = '<option value="請選擇任務">請選擇任務</option>' + tasks.map(function (task) {
            return '<option value="' + task + '">' + task + '</option>';
        }).join('');
        select_tasks.innerHTML = results;
    }

    // 產製附近站點
    function setPokestops(pokestops) {
        var pokestops_nearby = document.getElementById('pokestops_nearby');

        var results = '<option value="請選擇補給站">請選擇補給站</option>' + pokestops.map(function (pokestop) {
            return '\n            <option value="' + pokestop.poke_title + '\uFF20' + pokestop.poke_lat + '\uFF20' + pokestop.poke_lng + '\uFF20' + pokestop.poke_image + '">\n                ' + pokestop.poke_title + '\n            </option>';
        }).join('');
        pokestops_nearby.innerHTML = results;
    }

    // 產生圖示物件
    function getIcons(tasks) {
        tasks.forEach(function (task) {
            task_icon[task] = L.icon({
                iconUrl: './img/' + task + '_.png',
                iconSize: [48, 48],
                iconAnchor: [24, 24],
                popupAnchor: [0, -18]
            });

            layer_group[task] = [];
        });
    }

    // 產製點位
    function setRewards(reward) {
        var task = reward.task.split('：');

        var googleNavigation = navigation(reward.lat + ',' + reward.lng, '25.046266,121.517406');

        var img = "https://media.line.me/img/web/zh_TW/lineit_select_line_icon_01.png"; // line 按鈕圖示
        var url = 'https://5upergeo.github.io/PMGO-tasks-map/?lat=' + reward.lat + '&lng=' + reward.lng;

        var line_text = new Date().toLocaleDateString() + '\n' + reward.site_name + '\n' + reward.task + '\n' + reward.address + '\ngoogle map\uFF1A\nhttps://www.google.com.tw/maps/place/' + reward.lat + ',' + reward.lng + '\n\u5730\u5716\u9023\u7D50\uFF1A';

        // 行動裝置語法
        href = "http://line.naver.jp/R/msg/text/?" + encodeURIComponent(line_text) + "%0D%0A" + encodeURIComponent(url);

        var show_msg = '\n            <div class=\'pokestops\'>\n                <h3>' + reward.site_name + '</h3>\n                <hr>\n                <b>' + task[0] + '</b><br>\u2714\uFE0F\uFF1A' + reward['T&F'].T + ', \u274C\uFF1A' + reward['T&F'].F + '\n                <div class="crop">\n                    <img src="https://images.weserv.nl/?url=' + reward.image.replace(/^https?\:\/\//g, '') + '&w=70&h=70&il&trim=10&t=squaredown">\n                </div>\n                <a href=' + googleNavigation + ' target="_blank" style="font-size: 1.5em;">\uD83D\uDE98google\u5C0E\u822A</a><br>\n                <a href=' + href + ' target=\'_blank\'><img src=' + img + '></a>\n            </div>\n        ';

        layer_group[task[1]].push(L.marker([reward.lat, reward.lng], {
            // icon: task_icon[task[1]]
            icon: L.divIcon({
                className: reward['T&F'].F - reward['T&F'].T >= 1 ? "map-marker-fake map-marker" : "map-marker",
                iconSize: [48, 48],
                iconAnchor: [24, 24],
                popupAnchor: [0, -18],
                html: '<div><img src="./img/' + task[1] + '_.png"></div>'
            })
        }).bindPopup(show_msg));
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
        return fetch(url + '?method=get_tasks').then(function (d) {
            return d.json();
        });
    };

    // 取得任務總類清單
    function getTasksFull() {
        return fetch(url + '?method=get_tasks_full').then(function (d) {
            return d.json();
        });
    };

    // 取得任務清單
    function getExistingData() {
        return fetch(url + '?method=get_existing_data').then(function (d) {
            return d.json();
        });
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

        var urlParams = new URLSearchParams(location.search);

        var lat = urlParams.get('lat') || localStorage.getItem('lat') || 25.046266;
        var lng = urlParams.get('lng') || localStorage.getItem('lng') || 121.517406;
        var zoom = urlParams.get('zoom') || localStorage.getItem('zoom') || 15;

        return {
            latLng: [+lat, +lng],
            zoom: +zoom
        };
    };

    // 儲存當下座標至localStorag
    function setPosition() {
        if (!map) {
            return;
        }

        var geo = map.getCenter();
        var _ref = [geo.lat, geo.lng],
            lat = _ref[0],
            lng = _ref[1];


        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
        localStorage.setItem('zoom', map.getZoom());
    };
})(window, L);