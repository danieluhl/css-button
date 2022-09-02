import styles from "./Button.css";

export default function Button(handleClick) {
  return (
    <input type="button" onClick={handleClick} className="button" value="Click Me!" />
  );
}
