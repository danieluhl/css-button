import type { NextPage } from "next";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Button handleClick={() => console.log("here")} />
    </div>
  );
};

export default Home;
