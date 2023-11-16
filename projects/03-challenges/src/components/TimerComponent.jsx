import "./Timer.css";
import { useState } from "react";

export const TimerComponent = () => {
  const [timerValue, setTimerValue] = useState(135);

  const [estadoBoton1, setEstadoBoton1] = useState(false);

  const startTimer = () => {
    // Complete this function
    window.myTimer = setInterval(() => {
      setTimerValue((timer) => timer + 1);
    }, 1000);
    setEstadoBoton1(true);
  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    // Complete this function
    clearInterval(window.myTimer);
    setTimerValue(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.trunc(timerValue / 60)} mins </span>
      <span> {timerValue % 60} secs</span>
      <div>
        <button
          onClick={startTimer}
          className={estadoBoton1 && "boton-deshabilitado"}
        >
          Start
        </button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};
