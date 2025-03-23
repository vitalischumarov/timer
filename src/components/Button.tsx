import "./Button.scss";

interface ButtonProps {
  title: string;
  onclick: () => void;
}

function Button({ title, onclick }: ButtonProps) {
  return (
    <button className="btn" onClick={onclick}>
      {title}
    </button>
  );
}

export default Button;
