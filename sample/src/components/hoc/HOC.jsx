import { useEffect, useState } from "react";

const HOC = (Component) => {
  function HOCtoReturn() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => setDate(new Date()), 1000);
      return () => clearInterval(interval);
    }, [date]);
    return (
      <div>
        <h3>{date.toLocaleTimeString()}</h3>
        <Component />
      </div>
    );
  }
  return HOCtoReturn;
};

export default HOC;
