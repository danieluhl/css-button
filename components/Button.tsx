import styles from "./Button.module.css";

export default function Button({handleClick}: {handleClick: any}) {
  return (
    <input
      type="button"
      onClick={handleClick}
      className={styles.button}
      value="Click Me!"
    />
  );
}
