import { useState, useRef, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(false);
  const [delay, setDelay] = useState(0);
  const timer = useRef();

  const startStop = () => {
    setState((pre) => !pre);
  };

  useEffect(() => {
    console.log("바뀜", state, timer.current);
    if (timer.current !== undefined) {
      clearInterval(timer.current);
    }
    if (state) {
      let tmpDelay = delay;
      if (delay === 0) {
        setDelay(1000);
        tmpDelay = 1000;
      }
      timer.current = setInterval(() => {
        setCounter((pre) => pre + 1);
      }, tmpDelay);
    }
  }, [delay, state]);

  const changeSpeed = (e) => {
    if (e.target.innerText === "느리게") {
      setDelay((pre) => pre + 100);
    } else {
      if (delay >= 200) setDelay((pre) => pre - 100);
    }
  };
  
  return (
    <>
      <div>
        counter:{counter} / delay: {delay}
      </div>
      <div>
        <button onClick={startStop}>{state ? "STOP" : "PLAY"}</button>
      </div>
      <button onClick={changeSpeed}>느리게</button>
      <button onClick={changeSpeed}>빠르게</button>
    </>
  );
}
