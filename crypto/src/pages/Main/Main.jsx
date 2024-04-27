import Card from "../../components/Card/Card";
import styles from "./styles.module.css";

const Main = ({balance, setBalance}) => {
  console.log(balance)
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
    </main>
  );
};

export default Main;
