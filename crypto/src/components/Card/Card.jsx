import styles from "./styles.module.css";

const Card = ({ balance, setBalance }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBlock}>
        <p>CRYPTO-FINANCE</p>
        <button onClick={() => setBalance((prev) => prev + 1000)}>
          Add money
        </button>
      </div>

      <div className={styles.cardBlock}>
        <p>ARSLAN</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default Card;
