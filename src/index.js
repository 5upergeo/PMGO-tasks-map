import map from './map.js';
import { getData } from './data.js';
import { Task } from './task.js';

import './css/style.css';
import './image/icon/favicon.ico';

// console.log(getData);

async function task() {
    let data = await getData();
    let tasks = new Task(data[0], data[1])
        .cleanTask()
        .setIcons()
        .setMarker(map.map);

}

task()