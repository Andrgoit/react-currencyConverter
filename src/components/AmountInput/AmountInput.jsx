import styles from "@/components/AmountInput/AmountInput.module.css";

export default function AmountInput({ amount = 1, amountChange }) {
  return (
    <div>
      <input type="number" value={amount} onChange={amountChange} />
    </div>
  );
}
