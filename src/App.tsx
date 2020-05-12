import React, { useState } from "react";
import Timer from "./Timer";
import styles from "./App.module.css";

type tab = "POMODORO" | "SHORT_BREAK" | "LONG_BREAK";

function App() {
  const [tab, setTab] = useState("POMODORO");
  return (
    <div>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.tabButton}
          value="POMODORO"
          onClick={(e) => {
            setTab("POMODORO");
          }}
        >
          Pomodoro
        </button>
        <button
          className={styles.tabButton}
          value={"SHORT_BREAK"}
          onClick={(e) => {
            setTab("SHORT_BREAK");
          }}
        >
          Short Break
        </button>
        <button
          className={styles.tabButton}
          value={"LONG_BREAK"}
          onClick={(e) => {
            setTab("LONG_BREAK");
          }}
        >
          Long Break
        </button>
      </div>
      {tab === "POMODORO" && <Timer defaultTime={1500} />}
      {tab === "SHORT_BREAK" && <Timer defaultTime={300} />}
      {tab === "LONG_BREAK" && <Timer defaultTime={900} />}
    </div>
  );
}

export default App;
