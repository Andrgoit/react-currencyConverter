import styles from "@/components/ResultField/ResultField.module.css";
export default function ResultField({ convertFrom, convertTo, rate, amount }) {
  const base = convertFrom?.value;
  const quote = convertTo?.value;
  const result = (Number(amount) * Number(rate)).toFixed(2);
  const normalizeRate = rate.toFixed(2);

  return rate ? (
    <div className={styles.resultFieldWrapper}>
      <div>
        <span>
          Total: {result} {quote}
        </span>
      </div>
      <div>
        <span>
          1 {base}= {normalizeRate} {quote}
        </span>
      </div>
    </div>
  ) : null;
}
