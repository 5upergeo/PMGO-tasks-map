import map from './map.js';
import { getData } from './data.js';

import './css/style.css';
import './image/icon/favicon.ico';

// console.log(getData);

async function a() {
    let data = await getData();
    console.log(data[0]);
}

a()