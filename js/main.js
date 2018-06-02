var url = 'https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec';

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var map = L.map('map').fitWorld();

L.tileLayer('https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW', {
    id: 'streets',
    subdomains: "012",
    // attribution: 'Map data: &copy; Google'
}).addTo(map);

var latlng_qs = {
    lat: Number(getParameterByName('lat')),
    lng: Number(getParameterByName('lng'))
}

var latlng = "";

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    // L.marker(e.latlng).addTo(map)
    //     .bindPopup("You are within " + radius + " meters from this point").openPopup();
    latlng = e.latlng;
    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});

var task_icon = {};

//取得圖資
axios({
    method: 'get',
    url: url + '?method=get_tasks',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(function (response) {

    var mapData = response.data;

    mapData.forEach(function (item) {
        task_icon[item] = L.icon({
            iconUrl: './img/' + item + '_.png',
        
            iconSize:     [48, 48], // size of the icon
            iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -18] // point from which the popup should open relative to the iconAnchor
        });
    });

});

//取得圖資
axios({
    method: 'get',
    url: url + '?method=get_existing_data',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(function (response) {

    var mapData = response.data;

    mapData.forEach(function (element) {
        task = element.task.split('：')[1];

        var googleNavigation = navigation(element.lat + ',' + element.lng, latlng.lat + ',' + latlng.lng);

        var show_msg = "<div><h3>補給站名稱：" + element.site_name + '</h3><img src="' + element.image + '" width="200">' + '<br><a href=' + googleNavigation + ' target="_blank" style="font-size: 1.5em;">google\u5C0E\u822A</a>' + "</div>";

        L.marker([element.lat, element.lng], {icon: task_icon[task]})
            .addTo(map)
            .bindPopup(show_msg);
    });

    setTimeout(function () {
        if (latlng.lat && latlng.lng) {
            map.panTo(latlng_qs);
            // map.panTo([41.142937, -8.534538]);
        }

    })


});

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

