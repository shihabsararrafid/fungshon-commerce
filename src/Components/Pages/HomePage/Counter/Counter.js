import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const Ref = useRef(null);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const getTimeRemaining = () => {
    const total =
      new Date("Aug 31, 2022 10:27:25").getTime() - new Date().getTime();
    console.log(total);
    const seconds = Math.floor((total % (1000 * 60)) / 1000);
    const minutes = Math.floor((total % (1000 * 60 * 60)) / 1000 / 60);
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    let { days, hours, minutes, seconds } = getTimeRemaining();
    setDays(days + " : ");
    setHours((hours > 9 ? hours : "0" + hours) + " : ");
    setMinutes((minutes > 9 ? minutes : "0" + minutes) + " : ");
    setSeconds(seconds > 9 ? seconds : "0" + seconds);
  };

  const clearTimer = () => {
    //it will execute when the tab is not open

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer();
    }, 1000);
    Ref.current = id;
  };
  useEffect(() => {
    clearTimer();
  }, []);

  return (
    <div className="lg:w-[410px] mx-auto lg:mx-0 md:w-[70%] w-full pt-6 px-16 text-4xl h-[135px] text-white bg-black">
      <h1 className="text-2xl text-justify">50% Discount Till</h1>
      {/* <p>{timer}</p> */}
      <div className="grid grid-cols-4 px-0">
        <div>{days}</div>
        <div>{hours}</div>
        <div>{minutes}</div>

        <div>{seconds}</div>
        <div className="text-xs">days</div>
        <div className="text-xs">hours</div>
        <div className="text-xs">minutes</div>
        <div className="text-xs">seconds</div>
      </div>
      {/* <p className="text-sm">{str}</p> */}
    </div>
  );
};

export default Counter;
