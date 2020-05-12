import React from "react";
import useTimer from "./hooks/useTimer";
import { ReactComponent as PlayIcon } from "./img/play.svg";
import { ReactComponent as PauseIcon } from "./img/pause.svg";
import { ReactComponent as ResetIcon } from "./img/reset.svg";
import styles from "./Timer.module.css";

type TimerProps = {
  defaultTime: number;
};

export default function Timer({ defaultTime }: TimerProps) {
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
          {isActive ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button className={styles.button} onClick={() => timerActions.reset()}>
          <ResetIcon />
        </button>
      </div>
    </>
  );
}
