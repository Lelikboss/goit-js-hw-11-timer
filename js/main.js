class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      timer: document.querySelector("#timer-1"),
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timerId = setInterval(() => {
    const today = Date.now();
    let time = this.targetDate - today;
    this.changeTime(time);
    this.finishTimer(time);
  }, 1000);

  changeTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  }

  finishTimer(time) {
    if (time <= 0) {
      clearInterval(this.timerId);
      this.refs.days.textContent = "00";
      this.refs.hours.textContent = "00";
      this.refs.mins.textContent = "00";
      this.refs.secs.textContent = "00";
    }
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2021 23:59:59"),
});
