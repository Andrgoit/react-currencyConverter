import styles from "@/components/Form/Form.module.css";
export default function Form({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
