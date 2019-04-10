import L from "leaflet";

require.context('./image/pm', true, /\.(jpg|png)$/);

export class Task {
    // 初始化
    constructor(full_tasks) {
        this.full_tasks = full_tasks;
        this.tasks = [];
        this.rewards = new Set();
        this.rewards_icon = {};
    }

    cleanTask() {
        this.tasks = this.full_tasks.map((task) => {
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

    setIcons() {

        this.rewards_icon = this.rewards.reduce((a, b) => {
            a[b] = L.icon({
                iconUrl: `./images/${b}_.png`,
                iconSize: [48, 48],
                iconAnchor: [24, 24],
                popupAnchor: [0, -12]
            });

            return a
        }, {})

        return this
    }
}

