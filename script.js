class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
    }
    
    getRefs() {
        const selector = document.querySelector(this.selector);

        return {
            days: selector.querySelector('[data-value="days"]'),
            hours: selector.querySelector('[data-value="hours"]'),
            mins: selector.querySelector('[data-value="mins"]'),
            secs: selector.querySelector('[data-value="secs"]'),
        };
    }
    
    getTime(countdownTime) {
        const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
        const mins = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((countdownTime % (1000 * 60)) / 1000);
        return { days, hours, mins, secs };
    }

    start() {
        this.intervalId = setInterval(() => {
        const countdownTime = Date.parse(this.targetDate) - Date.now();

        if (countdownTime < 0) {
            clearInterval(this.intervalId);
            return;
        }

        const { days, hours, mins, secs } = this.getTime(countdownTime);
        
        this.getRefs().days.textContent = String(days).padStart(2, 0);;
        this.getRefs().hours.textContent = String(hours).padStart(2, 0);
        this.getRefs().mins.textContent = String(mins).padStart(2, 0);
        this.getRefs().secs.textContent = String(secs).padStart(2, 0);
        }, 1000);
    }
}

const timer = new CountdownTimer("#timer-1", new Date("May 22, 2021"));

timer.start();