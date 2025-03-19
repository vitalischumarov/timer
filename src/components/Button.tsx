import "./Button.scss";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button className="btn">{title}</button>;
}

export default Button;
