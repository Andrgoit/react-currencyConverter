import styles from "@/components/Title/Title.module.css";

export default function Title({ title = "" }) {
  return (
    <div className={styles.titleLayout}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
