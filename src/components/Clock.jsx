import React, {useState} from "react";
import "../index.css"

const Clock = () => {

    // const updateClock = () => {
    //     let hour = new Date().getHours();
    //     let minutes = new Date().getMinutes();
    //     let seconds = new Date().getSeconds();
    //     let ampm = "AM";
      
    //     if (hour > 12) {
    //       hour = hour - 12;
    //       ampm = "PM";
    //     } else if(hour == 12) {
    //       ampm = "PM"
    //     }
      
    //     hourEl.innerText = hour < 10 ? "0" + hour : hour;
    //     minuteEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    //     secondEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    //     ampmEl.innerText = ampm;
    //     setTimeout(() => {
    //       updateClock();
    //     }, 1000);
    //   };
      
    //   updateClock();

    return (
        <div class="clock">
    <div>
      <span id="hour">00</span>
      <span class="text">Hours</span>
    </div>
    <div>
      <span id="minutes">00</span>
      <span class="text">Minutes</span>
    </div>
    <div>
      <span id="seconds">00</span>
      <span class="text">Seconds</span>
    </div>
    <div>
      <span id="ampm">AM</span>
    </div>
  </div>
    )
}

export default Clock;