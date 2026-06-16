import styles from "@/components/ConvertButton/ConvertButton.module.css";
export default function ConvertButton({ onClick, disabled }) {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={onClick} disabled={!disabled} className={styles.button}>
        convert
      </button>
    </div>
  );
}
