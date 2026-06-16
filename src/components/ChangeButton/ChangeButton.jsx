import change from "@/assets/icons/changeIcon.png";
import styles from "@/components/ChangeButton/ChangeButton.module.css";

export default function ChangeButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        <img src={change} alt="change button" />
      </button>
    </div>
  );
}
