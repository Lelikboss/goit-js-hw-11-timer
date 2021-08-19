// const refs = {
//   days: document.querySelector("[data-value='days']"),
//   hours: document.querySelector("[data-value=hours]"),
//   min: document.querySelector("[data-value=mins]"),
//   sec: document.querySelector("[data-value=secs]"),
// };
// console.log(refs.days.textContent);

// let targetDate = new Date("Aug 20, 2021");
// console.log(targetDate.getDate());
// const today = new Date();
// console.log(today);
// let watchId = null;
// function timer() {
//   const time = targetDate - today;
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.min.textContent = mins;
//   refs.sec.textContent = secs;
//   startWatch();
// }
// function startWatch() {
//   targetDate = new Date("Aug 20, 2021");
//   watchId = setInterval(timer, 1000);
//   console.log(watchId);
// }

// window.addEventListener("DOMContentLoaded", startWatch);
//!
const refs = {
  timer: document.querySelector("#timer-1"),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
  }

  timerId = setInterval(() => {
    let today = Date.now();
    let timerDate = this.targetDate - today;
    changeTime(timerDate);
    stopInterval(timerDate);
  }, 1000);
}

function changeTime(time) {
  // const time = this.targetDate - this.today;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}
function stopInterval(timerDate) {
  if (timerDate < 0) {
    clearInterval(this.timerId);
    alert("GO!");
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 30, 2021 15:52:00"),
});
//!
