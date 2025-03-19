import { useState } from "react";
import "./App.scss";
import Input from "./components/Input";
import Button from "./components/Button";
import TimerLeft from "./components/TimerLeft";
import "./App.scss";

function App() {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newInput: string = event.target.value;
    console.log(newInput);
  }

  return (
    <div className="app">
      <h3>Zeit festlegen:</h3>
      <Input action={handleInput}></Input>
      <TimerLeft></TimerLeft>
      <div className="btn_row">
        <Button title="Start"></Button>
        <Button title="Pause"></Button>
        <Button title="Reset"></Button>
      </div>
    </div>
  );
}

export default App;
