import { useState } from "react";
import "./App.scss";
import Input from "./components/Input";
import Button from "./components/Button";
import TimerLeft from "./components/TimerLeft";
import "./App.scss";

function App() {
  const [input, setInput] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newInput: string = event.target.value;
    setInput(newInput);
  }

  function resetTimer() {
    setInput("0");
  }

  function startTimer() {}

  function pauseTimer() {}

  return (
    <div className="app">
      <h3>Zeit festlegen:</h3>
      <Input onclick={handleInput} timer={input}></Input>
      <TimerLeft counter={input}></TimerLeft>
      <div className="btn_row">
        <Button title="Start" onclick={resetTimer}></Button>
        <Button title="Pause" onclick={resetTimer}></Button>
        <Button title="Reset" onclick={resetTimer}></Button>
      </div>
    </div>
  );
}

export default App;
