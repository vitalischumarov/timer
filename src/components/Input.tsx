import "./Input.scss";

interface InputProp {
  action: () => string;
}

function Input({ action }: InputProp) {
  return (
    <input
      type="number"
      className="inputField"
      placeholder="Gibt die Zeit in Sekunden ein..."
      onChange={action}
    />
  );
}

export default Input;
