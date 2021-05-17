// Створи плагін налаштовуваного таймера, який веде зворотний відлік до попередньо визначеної дати.
// Плагін очікує наступну HTML-розмітку і показує чотири цифри: дні, години, хвилини і секунди в форматі XX:XX:XX:XX. Кількість днів може складатися з більш ніж двох цифр.

// Плагін - це клас CountdownTimer, екземпляр якого створює новий таймер з настройками.

const refs = {
    days: document.querySelector('.value[data-value="days"]'),
    hours: document.querySelector('.value[data-value="hours"]'),
    mins: document.querySelector('.value[data-value="mins"]'),
    secs: document.querySelector('.value[data-value="secs"]'),
}

class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
}

const endDate = new CountdownTimer('#timer-1', new Date('May 17, 2021'))
 
function updateTimer() {
    setInterval(() => {
    const time = Date.parse(endDate.targetDate) - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
            
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}, 1000);
}

window.addEventListener('load', updateTimer);