import React, { useState, useEffect } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const interval = setInterval(tick(), 1000);
    return () => clearInterval(interval);
  }, [date]);
  return (
    <>
      <p>Hello {date.toLocaleTimeString()}</p>
    </>
  );
};

export default Timer;
