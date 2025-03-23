import "./Input.scss";

interface InputProp {
  onclick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  timer: string;
}

function Input({ onclick, timer }: InputProp) {
  return (
    <input
      type="number"
      className="inputField"
      placeholder="Gibt die Zeit in Sekunden ein..."
      onChange={onclick}
      value={timer}
    />
  );
}

export default Input;
