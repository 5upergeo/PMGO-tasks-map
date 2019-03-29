"use strict";

(function (window, L) {
  var url = 'https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec';
  var return_task_url = 'https://script.google.com/macros/s/AKfycbzMvd730XVRRCoEL13052qsOC81kwPKeWRWZJV9B60e59nXCDLZ/exec';
  var position = getPosition();
  var mapLatLng = position.latLng;
  var mapZoom = position.zoom;
  var map = L.map('map', {
    attributionControl: false
  });
  var task_icon = {};
  var layer_group = {};
  var layer_control = L.control.layers({}, {}, {
    position: "bottomleft" // collapsed: false

  }).addTo(map);
  var locate_status = false;
  var streets = L.tileLayer('https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW', {
    subdomains: "012",
    maxZoom: 20,
    attribution: 'Map data: &copy; Google',
    fixed: true
  }); // 定位

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
  }); // 重新讀取數據

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
  }); // 回報任務

  var return_task_control = L.Control.extend({
    options: {
      position: 'topleft'
    },
    onAdd: function onAdd(map) {
      var control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom return_task');
      control.style.backgroundColor = 'white';
      control.style.backgroundImage = "url(img/add_64.png)";
      control.style.backgroundSize = "30px 30px";
      control.style.width = '30px';
      control.style.height = '30px';

      control.onclick = function () {
        var _this = this;

        if (!this.classList.contains("use")) {
          Promise.all([getLineInfo()]).then(function (d) {
            var profile = d[0];
            localStorage.removeItem('LineID');

            if (!profile.success) {
              alert('請透過加入Line機器人[oh?]，啟動回報權限。');
            } else {
              var user_info = document.getElementById('Line_displayName');
              user_info.value = profile.displayName;
              user_info.dataset.LineID = profile.userId;
              var conter = map.getCenter(); // http://127.0.0.1:5000/
              // https://pokestop-taiwan-2.herokuapp.com/

              var dd = new Date().getDate();
              dd = dd > 15 ? 2 : 1;

              var _url = "https://pokestop-taiwan-".concat(dd, ".herokuapp.com/get_bbox_sites/").concat(conter.lat, "/").concat(conter.lng);

              fetch(_url).then(function (d) {
                return d.json();
              }).then(function (d) {
                return setPokestops(d);
              });

              _this.classList.toggle("use");

              document.getElementsByClassName('select_task')[0].classList.toggle("hide");
            }
          });
        } else {
          this.classList.toggle("use");
          document.getElementsByClassName('select_task')[0].classList.toggle("hide");
        }
      };

      return control;
    }
  }); // 回報說明

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
  }); // 平台轉移

  var twpkinfo_station = L.Control.extend({
    options: {
      position: 'topleft'
    },
    onAdd: function onAdd(map) {
      var control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');
      control.style.backgroundColor = '#fff';
      control.style.backgroundImage = "url(img/station_64.png)";
      control.style.backgroundSize = "30px 30px";
      control.style.width = '30px';
      control.style.height = '30px';

      control.onclick = function () {
        this.classList.toggle("use");
        document.getElementsByClassName('station')[0].classList.toggle("hide");
      };

      return control;
    }
  }); // 情報圖

  var news = L.Control.extend({
    options: {
      position: 'topleft'
    },
    onAdd: function onAdd(map) {
      var control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');
      control.style.backgroundColor = '#ffd306';
      control.style.backgroundImage = "url(img/news_64.png)";
      control.style.backgroundSize = "30px 30px";
      control.style.width = '30px';
      control.style.height = '30px';

      control.onclick = function () {
        window.open('https://i.imgur.com/2ZcfUC5.jpg');
      };

      return control;
    }
  });
  map.addLayer(streets).addControl(new locate_control()).addControl(new relaod_control()).addControl(new return_task_control()).addControl(new return_task_info()).addControl(new twpkinfo_station()).addControl(new news()).on('load', onLoad).on('moveend', setPosition).on('moveend', setMapView).on('zoomend', setMapView).on('locationfound', onLocationFound).setView(mapLatLng, mapZoom); // 地圖建立時執行

  function onLoad() {
    getData();
    setPosition();
  } // 回報任務


  function return_task() {
    var LineID = document.getElementById('Line_displayName').dataset.LineID;
    var pokestop_info = document.getElementById('pokestops_nearby').value.split('＠');
    var task = document.getElementById('tasks').value;
    fetch(return_task_url, {
      method: "POST",
      body: "LineID=".concat(LineID, "&pokestop=").concat(encodeURIComponent(pokestop_info[0]), "&lat=").concat(encodeURIComponent(pokestop_info[1]), "&lng=").concat(encodeURIComponent(pokestop_info[2]), "&image=").concat(encodeURIComponent(pokestop_info[3]), "&task=").concat(encodeURIComponent(task)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (d) {
      return d.json();
    }).then(function (d) {
      if (d.success) {
        window.reports.push({
          'T&F': {
            T: 0,
            F: 0
          },
          'task': task,
          'lat': pokestop_info[1],
          'lng': pokestop_info[2],
          'pokestop': pokestop_info[0],
          'image': pokestop_info[3],
          'address': ''
        });
        setMapView(); // setRewards();

        resetTask();
      } else {
        alert(d.msg);
      }

      document.getElementsByClassName('return_task')[0].classList.toggle("use");
      document.getElementsByClassName('select_task')[0].classList.toggle("hide");
    });
  }

  document.getElementById('return_task').onclick = return_task; // 抓取資料

  function getData() {
    var start = new Date(2019, 2, 30, 11);
    var end = new Date(2019, 2, 30, 20);
    Promise.all([getTasks(), getExistingData(), getTasksFull()]).then(function (d) {
      if (new Date() >= start && new Date() < end) {
        d[2] = ["投出(?)次曲球：投球任務", "投出(?)次Great球：投球任務", "連續投出(?)次Great球：投球任務", "投出(?)次Nice球：投球任務", "連續投出(?)次Nice球：投球任務", "捉寶可夢使用(?)顆樹果：餵食樹果任務", "參加一次道館戰：道館對戰任務", "在一場道館戰中使用效果絕佳的特殊招式：道館對戰任務", "參加一次團體戰：團體戰任務", "補捉一隻漂浮泡泡：飄浮泡泡", "捕捉(?)隻天氣加成寶可夢：天氣怪任務", "捕捉(?)隻天氣加成寶可夢：天氣怪任務", "拜訪(?)次補給站：補給站轉排任務"];
        d[0] = ["投球任務", "餵食樹果任務", "道館對戰任務",, "團體戰任務", "飄浮泡泡", "天氣怪任務", "補給站轉排任務"];
      }

      var tasks = d[0];
      getIcons(tasks);
      setTasks(d[2]);
      window.tasks = tasks;
      window.reports = d[1];
      setMapView();
    });
  } // 過濾資料


  function setMapView() {
    if (typeof window.reports === 'undefined') {
      return 0;
    }

    var EW = [map.getBounds().getEast(), map.getBounds().getWest()];
    var NS = [map.getBounds().getNorth(), map.getBounds().getSouth()];
    getIcons(window.tasks);
    window.reports.filter(function (item) {
      return item.lat < NS[0] && item.lat > NS[1] && item.lng < EW[0] && item.lng > EW[1];
    }).forEach(setRewards);
    resetTask();
    setONOFF();
  } // 產製任務回報


  function setTasks(tasks) {
    var select_tasks = document.getElementById('tasks');
    var results = '<option value="請選擇任務">請選擇任務</option>' + tasks.map(function (task) {
      return "<option value=\"".concat(task, "\">").concat(task, "</option>");
    }).join('');
    select_tasks.innerHTML = results;
  } // 產製附近站點


  function setPokestops(pokestops) {
    var pokestops_nearby = document.getElementById('pokestops_nearby');
    var results = '<option value="請選擇補給站">請選擇補給站</option>' + pokestops.map(function (pokestop) {
      return "\n            <option value=\"".concat(pokestop.poke_title, "\uFF20").concat(pokestop.poke_lat, "\uFF20").concat(pokestop.poke_lng, "\uFF20").concat(pokestop.poke_image, "\">\n                ").concat(pokestop.poke_title, "\n            </option>");
    }).join('');
    pokestops_nearby.innerHTML = results;
  } // 產生圖示物件


  function getIcons(tasks) {
    tasks.forEach(function (task) {
      task_icon[task] = L.icon({
        iconUrl: "./img/".concat(task, "_.png"),
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -12]
      });
      layer_group[task] = [];
    });
  } // 產製點位


  function setRewards(reward) {
    var task = reward.task.split('：');
    var googleNavigation = navigation("".concat(reward.lat, ",").concat(reward.lng), "25.046266,121.517406");
    var img = "https://media.line.me/img/web/zh_TW/lineit_select_line_icon_01.png"; // line 按鈕圖示

    var url = "https://5upergeo.github.io/PMGO-tasks-map/?lat=".concat(reward.lat, "&lng=").concat(reward.lng);
    var share_text = "".concat(new Date().toLocaleDateString(), "\n").concat(reward.site_name, "\n").concat(reward.task, "\n").concat(reward.address, "\ngoogle map\uFF1A\nhttps://www.google.com.tw/maps/place/").concat(reward.lat, ",").concat(reward.lng, "\n\u5730\u5716\u9023\u7D50\uFF1A\n").concat(url); // 行動裝置語法
    // if (navigator.userAgent.match(/(android|iphone|ipod|ipad);?/i)) {

    var href = "line://msg/text/" + encodeURIComponent(share_text); // } else {
    //     const href = "http://line.naver.jp/R/msg/text/?" + encodeURIComponent(share_text);
    // }

    var show_msg = "\n            <div class='pokestops'>\n                <h3>".concat(reward.site_name, "</h3>\n                <b>").concat(task[0], "</b><br>\u2714\uFE0F\uFF1A").concat(reward['T&F'].T, ", \u274C\uFF1A").concat(reward['T&F'].F, "\n                <div class=\"crop\">\n                    <!-- <img src=\"https://images.weserv.nl/?url=").concat(reward.image.replace(/^https?\:\/\//g, ''), "&w=70&h=70&il&trim=10&t=squaredown\">  -->\n                    <img src=\"").concat(reward.image, "\">\n                </div>\n                <a href=").concat(googleNavigation, " target=\"_blank\">\uD83D\uDE98google\u5C0E\u822A</a><br>\n                <a href=").concat(href, " target='_blank' class=\"line_share\"><img src=").concat(img, "></a>\n                <a href=\"#\" class=\"web_share\" onclick=\"copy_text(this)\" data-share_text = '").concat(share_text, "'>\u8907\u88FD\u5206\u4EAB\u6587\u5B57</a>\n            </div>\n        ");

    window.copy_text = function (e) {
      var clip_area = document.createElement('textarea');
      clip_area.textContent = e.dataset.share_text;
      document.body.appendChild(clip_area);
      clip_area.select();
      document.execCommand('copy');
      clip_area.remove();
    };

    try {
      layer_group[task[1]].push(L.marker([reward.lat, reward.lng], {
        // icon: task_icon[task[1]]
        icon: L.divIcon({
          className: reward['T&F'].F - reward['T&F'].T >= 1 ? "map-marker-fake map-marker" : "map-marker",
          iconSize: [42, 42],
          iconAnchor: [21, 21],
          popupAnchor: [0, -8],
          html: "<div><img src=\"./img/".concat(task[1], "_.png\"></div>")
        })
      }).bindPopup(show_msg, {
        autoPan: false
      }));
    } catch (err) {
      console.log('又有人回報舊任務惹QAQ');
    }
  } // 開始定位


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
  } // 取消訂位


  function stopLocateMe() {
    locate_status = false;
    map.stopLocate();
    window.red._icon.style.display = 'none';
  } // 取得任務總類清單


  function getTasks() {
    return fetch("".concat(url, "?method=get_tasks")).then(function (d) {
      return d.json();
    });
  }

  ; // 取得任務總類清單

  function getTasksFull() {
    return fetch("".concat(url, "?method=get_tasks_full")).then(function (d) {
      return d.json();
    });
  }

  ; // 取得任務清單

  function getExistingData() {
    return fetch("".concat(url, "?method=get_existing_data")).then(function (d) {
      return d.json();
    });
  }

  function setONOFF() {
    Array.from(document.querySelectorAll('input[type=checkbox]:not(.not_task)')).forEach(function (item) {
      item.addEventListener("click", function () {
        viewChange();
      });
    });
  }

  function viewChange() {
    window.checkedData = Array.from(document.querySelectorAll('input[type=checkbox]')).map(function (item) {
      return item.checked;
    });
  }

  function resetTask() {
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
      all["<img src=\"./img/".concat(reward, "_.png\" class=\"controlIcon\">")] = layer;
      return all;
    }, {});
    overlayMaps["<img src=\"./img/close_64.png\" class=\"controlIcon\" id=\"close_all\">"] = L.layerGroup([], {});
    map.removeControl(layer_control);
    layer_control = L.control.layers({}, overlayMaps, {
      position: "bottomleft" // collapsed: false

    }).addTo(map);
    document.getElementById('close_all').parentNode.previousSibling.checked = true;
    document.getElementById('close_all').parentNode.previousSibling.classList.add('not_task');
    document.querySelector('.not_task').addEventListener('click', function () {
      if (this.checked) {
        Array.from(document.querySelectorAll('input[type=checkbox]:not(.not_task)')).forEach(function (item, index) {
          if (item.checked) {
            item.click();
          }
        });
      } else {
        Array.from(document.querySelectorAll('input[type=checkbox]:not(.not_task)')).forEach(function (item, index) {
          if (!item.checked) {
            item.click();
          }
        });
      }
    });

    if (typeof window.checkedData === 'undefined' || window.checkedData.length === 0) {
      document.getElementById('close_all').parentNode.previousSibling.checked = false;
      return 0;
    }

    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(function (item, index) {
      if (!window.checkedData[index]) {
        item.click();
      }
    });
  } // 取得任務清單


  function getLineInfo() {
    var urlParams = new URLSearchParams(location.search);
    var LineID = urlParams.get('LineID') || "";
    return fetch("".concat(return_task_url, "?method=get_profile&LineID=").concat(LineID)).then(function (d) {
      return d.json();
    });
  } // 監聽GPS訊號


  function onLocationFound(e) {
    window.red.setLatLng(e.latlng);
  } //導航連結


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
    }

    ;
    return "";
  } // 取得座標(querystring -> localStorage -> 北車)


  function getPosition() {
    var urlParams = new URLSearchParams(location.search);
    var lat = urlParams.get('lat') || localStorage.getItem('lat') || 25.046266;
    var lng = urlParams.get('lng') || localStorage.getItem('lng') || 121.517406;
    var zoom = urlParams.get('zoom') || localStorage.getItem('zoom') || 15;
    return {
      latLng: [+lat, +lng],
      zoom: +zoom
    };
  }

  ; // 儲存當下座標至localStorag

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
  }

  ;
})(window, L);