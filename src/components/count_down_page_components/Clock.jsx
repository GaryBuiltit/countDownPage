import React, {useState} from "react";
import "../../../src/preview.css";


const Clock = (props) => {

    const [hour, setHour] = useState("00");
    const [days, setDays] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")


    return (
        <div class="clock">
        <div>
      <span id="days">{days}</span>
      <span class="text">Days</span>
    </div>
    <div>
      <span id="hour">{hour}</span>
      <span class="text">Hours</span>
    </div>
    <div>
      <span id="minutes">{minutes}</span>
      <span class="text">Minutes</span>
    </div>
    <div>
      <span id="seconds">{seconds}</span>
      <span class="text">Seconds</span>
    </div>
    {/* <div>
      <span id="ampm">AM</span>
    </div> */}
  </div>
    )
}

export default Clock;