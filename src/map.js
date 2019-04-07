import L from "leaflet";
import "leaflet/dist/leaflet.css";

class Map {
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

        let position = getPosition();
        let mapLatLng = position.latLng;
        let mapZoom = position.zoom;

        this.map.addLayer(this.streets)
            .setView(mapLatLng, mapZoom);
    }

}

let map = new Map();

// 取得座標
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