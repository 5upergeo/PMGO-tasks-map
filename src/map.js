import L from "leaflet";
import "leaflet/dist/leaflet.css";

import './image/icon/location_64.png';
import './image/icon/direction_64.png';
import './image/icon/pikachu.gif';

import { getLocation, setLocation } from './data.js';
import './css/map.css';

class Map {
    // 初始化
    constructor() {
        // 街道圖
        this.streets = L.tileLayer(
            "https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW", {
                subdomains: "012",
                maxZoom: 20,
                attribution: "Map data: &copy; Google",
            }
        );
        // 地圖物件
        this.map = L.map("map", {
            attributionControl: false
        });

        let location = getLocation();
        let mapLatLng = location.latLng;
        let mapZoom = location.zoom;

        this.map
            .addLayer(this.streets)
            .setView(mapLatLng, mapZoom);

        this.direction = undefined;

        this.user = L.marker(mapLatLng, {
            icon: L.divIcon({
                className: 'user hide',
                iconSize: [30, 48],
                iconAnchor: [15, 24],
                html: `<div><img style="height: 48px; width: 30px;" src="/images/pikachu.gif"></div>`
            }),
        });

        if ('ondeviceorientationabsolute' in window) {

            this.direction = L.marker(mapLatLng, {
                icon: L.divIcon({
                    className: 'direction hide',
                    iconSize: [100, 100],
                    iconAnchor: [50, 50],
                    html: `<div><img style="height: 100px; width: 100px;" src="/images/direction_64.png"></div>`
                }),
            });

            this.map
                .addLayer(this.direction)
                .addLayer(this.user);

            let direction_img = document.querySelector('#map .direction img');
            let user_img = document.querySelector('#map .user img');

            // 監聽方位事件
            window.addEventListener('deviceorientationabsolute', function (event) {
                let alpha = event.alpha;

                if (alpha !== null) {
                    direction_img.style.Transform = `rotate(${-alpha}deg)`;
                    direction_img.style.WebkitTransform = `rotate(${-alpha}deg)`;
                    direction_img.style.MozTransform = `rotate(${-alpha}deg)`;

                    user_img.style.Transform = `rotate(${-alpha + 180}deg)`;
                    user_img.style.WebkitTransform = `rotate(${-alpha + 180}deg)`;
                    user_img.style.MozTransform = `rotate(${-alpha + 180}deg)`;
                } else {
                    user_img.style.Transform = "";
                    user_img.style.WebkitTransform = "";
                    user_img.style.MozTransform = "";

                    direction_img.style.display = "none";
                }
            }, true);
        } else {
            this.map.addLayer(this.user)
        }

        // 監聽GPS訊號
        this.map
            .on('locationfound', (e) => {
                this.user.setLatLng(e.latlng);
                if (typeof this.direction !== "undefined") {
                    this.direction.setLatLng(e.latlng);
                }
                this.map.setView(e.latlng, this.map.getZoom());
            })
            .on('moveend', setLocation(this.map))
            .stopLocate();

    }

    // 加入控制項
    addControl(position, icon, onclick) {
        let control = L.Control.extend({

            options: {
                position: position
            },

            onAdd: (map) => {
                let control = L.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');

                control.style.backgroundColor = 'white';
                control.style.backgroundImage = `url(${icon})`;
                control.style.backgroundSize = "30px 30px";
                control.style.width = '30px';
                control.style.height = '30px';
                control.style.cursor = 'pointer';
                control.onclick = onclick(this);

                return control;
            }
        })
        this.map.addControl(new control())
    }

}

let map = new Map();

// 加入定位控制
map.addControl('topleft', '/images/location_64.png', (that) => {
    return (e) => {
        e.target.classList.toggle("use");
        that.user._icon.classList.toggle("hide");
        that.direction._icon.classList.toggle("hide");

        if (typeof that.map._locateOptions === "undefined" || that.map._locateOptions.watch) {
            that.map.locate({
                watch: true,
                maxZoom: that.map.getZoom(),
                enableHighAccuracy: true
            });
        } else {
            that.map.stopLocate();
        }
    }
})

export default map