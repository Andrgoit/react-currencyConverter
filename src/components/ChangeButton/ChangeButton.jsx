import styles from "@/components/ChangeButton/ChangeButton.module.css";

export default function ChangeButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        <img src="" alt="change button" />
      </button>
    </div>
  );
}
