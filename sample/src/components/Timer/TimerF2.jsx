import { useState, useEffect } from "react";

export default function Timer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return <div>{date.toLocaleTimeString()}</div>;
}
