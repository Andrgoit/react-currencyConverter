import styles from "@/components/AmountInput/AmountInput.module.css";

export default function AmountInput({ amount, amountChange }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="number"
        value={amount}
        onChange={(e) => amountChange(e.target.value)}
        className={styles.amountInput}
      />
    </div>
  );
}
