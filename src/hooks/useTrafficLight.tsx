import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficlightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficlightColor>("red");
  const [countdown, setCountdown] = useState(5);

  //countdown effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval llamado");
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => {
      console.log("CleanUp Effect");
      clearInterval(intervalId);
    };
  }, [countdown]);

  //Change ligth color effect
  useEffect(() => {
    if (countdown > 0) return;
    setCountdown(5);
    if (light === "red") {
      setLight("green");
      return;
    }
    if (light === "yellow") {
      setLight("red");
      return;
    }
    if (light === "green") {
      setLight("yellow");
      return;
    }
  }, [countdown, light]);
  return {
    //Propierties
    light,
    countdown,
    colors,

    //computers
    percentage: (countdown / 5) * 100,
    redLight: light === "red" ? colors[light] : `bg-gray-500`,
    yellowLight: light === "yellow" ? colors[light] : `bg-gray-500`,
    greenLight: light === "green" ? colors[light] : `bg-gray-500`,

    //Methods
  };
};
