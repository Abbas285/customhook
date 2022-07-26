import { useState, useEffect } from "react";
const useCounter = (value) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + Number(value));
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);
  return counter;
};
export default useCounter;
