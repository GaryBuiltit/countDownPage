const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const updateClock = () => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  //   hour = hour < 10 ? "0" + hour : hour;
  //   minutes = minutes < 10 ? "0" + minutes :minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  hourEl.innerText = hour < 10 ? "0" + hour : hour;
  minuteEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
};

updateClock();
