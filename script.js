const refs = {
  days: document.querySelector('#timer-1 [data-value="days"]'),
  hours: document.querySelector('#timer-1 [data-value="hours"]'),
  mins: document.querySelector('#timer-1 [data-value="mins"]'),
  secs: document.querySelector('#timer-1 [data-value="secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const countdownTime = Date.parse(this.targetDate) - Date.now();

      const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((countdownTime % (1000 * 60)) / 1000);

      refs.days.textContent = String(days).padStart(2, 0);
      refs.hours.textContent = String(hours).padStart(2, 0);
      refs.mins.textContent = String(mins).padStart(2, 0);
      refs.secs.textContent = String(secs).padStart(2, 0);
    }, 1000);
  }
}

const timer = new CountdownTimer("#timer-1", new Date("May 22, 2021"));

timer.start();
