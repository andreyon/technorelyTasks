class Watch {

    constructor() {
        this.interval = null;
    }

    start() {
        let timeNow = null;
        this.interval = setInterval(function() {
            timeNow = new Date();
            console.log(timeNow.getHours()+":"+timeNow.getMinutes()+":"+timeNow.getSeconds());
            }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        console.clear();
    }
}

const watch = new Watch();

watch.start();


setTimeout(() => {
    // Остановится через 10 секунд
    watch.stop();
}, 10000);