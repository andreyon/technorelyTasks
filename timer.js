class Timer {
    constructor(initialTime) {
        this.initialTime = initialTime;
    }

    start() {
        this.timerId = setInterval(() => {
            this.initialTime = this.initialTime - 1;
            console.log(this.initialTime);

            if (this.initialTime <= 0) {
                this.stop();
                this.timeOver();
            }
        }, 1);
    }

    stop() {
        clearInterval(this.timerId);
    }

    reset() {
        this.stop();
        this.initialTime = null;
    }

    addTime(time) {
        this.initialTime += time;
    }

    subtractTime(time) {
        this.initialTime -= time;
    }

    timeOver() {
        console.log("time over");
    }
}


let timer = new Timer(1000);
timer.start();

// my checks

// setTimeout(() => {timer.stop()}, 500);

// setTimeout(() => {timer.reset()}, 500);
// setTimeout(() => {console.log("initialTime = ", timer.initialTime)}, 600);

// setTimeout(() => {timer.addTime(1000)}, 500);
// setTimeout(() => {timer.subtractTime(800)}, 300);
