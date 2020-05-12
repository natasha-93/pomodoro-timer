import { useState, useEffect } from "react";

type TimerData = {
  currentTime: number;
  isActive: boolean;
  formattedTime: string;
};

type TimerActions = {
  togglePause: () => void;
  pause: () => void;
  start: () => void;
  reset: () => void;
};

type UseTimerResponse = [TimerData, TimerActions];

const formatTime = (num: number) => {
  const hours = Math.floor(num / 60);
  const minutes = String(num % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export default function (defaultTime = 1500): UseTimerResponse {
  const [currentTime, setDisplayedTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (currentTime > 0 && isActive) {
      timeout = setTimeout(() => {
        setDisplayedTime(currentTime - 1);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [currentTime, isActive]);

  return [
    {
      currentTime,
      isActive,
      formattedTime: formatTime(currentTime),
    },
    {
      togglePause: () => setIsActive(!isActive),
      pause: () => setIsActive(false),
      start: () => setIsActive(true),
      reset: () => {
        if (isActive) {
          setIsActive(false);
        } else {
          setDisplayedTime(defaultTime);
        }
      },
    },
  ];
}
