import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Input from "./components/Input";
import Button from "./components/Button";
import TimerLeft from "./components/TimerLeft";
import "./App.scss";

function App() {
  const [input, setInput] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(Number(input));
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const idRef = useRef<number>();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newInput: string = event.target.value;
    setInput(newInput);
    setTimeLeft(Number(newInput));
  }

  function startTimer() {
    setTimerIsRunning(true);
    console.log("start");
  }

  useEffect(() => {
    if (timerIsRunning) {
      idRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 0.001;
          } else {
            clearInterval(idRef.current);
            setTimerIsRunning(false);
            return 0;
          }
        });
      }, 10);
      console.log(idRef.current);
    } else {
      clearInterval(idRef.current);
    }
    return () => {};
  }, [timerIsRunning]);

  function pauseTimer() {
    clearInterval(idRef.current);
    setTimerIsRunning(false);
  }

  function resetTimer() {
    clearInterval(idRef.current);
    setTimeLeft(Number(input));
    setTimerIsRunning(false);
  }

  return (
    <div className="app">
      <h3>Zeit festlegen:</h3>
      <Input onclick={handleInput} timer={input}></Input>
      <TimerLeft counter={timeLeft}></TimerLeft>
      <div className="btn_row">
        <Button title="Start" onclick={startTimer}></Button>
        <Button title="Pause" onclick={pauseTimer}></Button>
        <Button title="Reset" onclick={resetTimer}></Button>
      </div>
    </div>
  );
}

export default App;
