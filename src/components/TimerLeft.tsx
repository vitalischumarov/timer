interface TimerLeftProps {
  counter: number;
}

function TimerLeft({ counter }: TimerLeftProps) {
  function formatTime(time: number): string {
    let formatTime: string = time.toFixed(3);
    return formatTime;
  }

  return (
    <div>
      <h1>{"Time left:"}</h1>
      <h1>{`${formatTime(counter)} s`}</h1>
    </div>
  );
}

export default TimerLeft;
