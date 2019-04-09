import { urls } from './urls.js';

// 取得座標
export function getLocation() {
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
export function setLocation(map) {
    return () => {
        if (!map) {
            return;
        }

        let geo = map.getCenter();
        let [lat, lng] = [geo.lat, geo.lng];

        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
        localStorage.setItem('zoom', map.getZoom());
    }
};

function toJSON(d) {
    return d.json();
};

function fetchJSON(url) {
    return fetch(url).then(toJSON);
};

async function fetchJSON_(url) {
    const d = await fetch(url);
    return toJSON(d);
};

export async function getData() {
    return Promise.all([
        fetchJSON(`${urls.macros}?method=get_tasks_full_`)
    ])
}
