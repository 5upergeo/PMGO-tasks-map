import L from "leaflet";

require.context('./image/pm', true, /\.(jpg|png)$/);

export class Task {
    // 初始化
    constructor(tasks_content, tasks_list) {
        this.tasks_content = tasks_content; // 任務內容
        this.tasks_list = tasks_list;       // 任務清冊

        this.rewards = new Set();           // 獎賞清單
        this.rewards_icon = {};             // 獎賞圖示

        this.task_layer = L.layerGroup([]); // 任務圖層
    }

    // 整理任務資訊
    cleanTask() {
        this.tasks_content = this.tasks_content.map((task) => {
            let tem = task.split('：');
            this.rewards.add(tem[1])

            return {
                content: tem[0],
                reward: tem[1],
                type: tem[2]
            }
        })

        this.rewards = Array.from(this.rewards);
        return this
    }

    //  設定任務圖示
    setIcons() {

        this.rewards_icon = this.rewards.reduce((a, b) => {
            a[b] = L.icon({
                iconUrl: `./images/${b}_.png`,
                iconSize: [42, 42],
                iconAnchor: [21, 21],
                popupAnchor: [0, -8],
            });

            return a
        }, {})

        return this
    }

    // 設定marker
    setMarker(map) {

        this.tasks_list.forEach((task) => {
            task.task = task.task.split('：');
            
            L.marker(
                [task.lat, task.lng],
                {
                    icon: this.rewards_icon[task.task[1]],
                    title: task.site_name,
                    report: task,
                }
            ).addTo(this.task_layer);
        })

        map.addLayer(this.task_layer);
        return this
    }

    // 設定圖層
    setLayer() {

    }
}

