import React from "react";
import useTimer from "./hooks/useTimer";
import styles from "./Timer.module.css";

export default function Timer({ defaultTime }) {
  const [{ formattedTime, isActive }, timerActions] = useTimer(defaultTime);
  return (
    <>
      <div className={styles.timerContainer}>
        <p className={styles.time}>{formattedTime}</p>
      </div>
      <div className={styles.timerActions}>
        <button
          className={styles.button}
          onClick={(e) => timerActions.togglePause()}
        >
          {isActive ? "II" : "▶️"}
        </button>
        <button className={styles.button} onClick={() => timerActions.reset()}>
          Reset
        </button>
      </div>
    </>
  );
}
