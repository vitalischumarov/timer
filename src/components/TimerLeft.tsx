interface TimerLeftProps {
  counter: string;
}

function TimerLeft({ counter }: TimerLeftProps) {
  function formatTime(time: number): string {
    let formatTime: string = time.toFixed(3);
    console.log(formatTime);
    return formatTime;
  }

  return (
    <div>
      <h1>{"Time left:"}</h1>
      <h1>{formatTime(Number(counter))}</h1>
    </div>
  );
}

export default TimerLeft;
