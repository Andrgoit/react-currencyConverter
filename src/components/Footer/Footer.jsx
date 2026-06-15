import github from "@/assets/icons/github.svg";
import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <div>
      <a
        href="https://github.com/Andrgoit/react-currencyConverter"
        target="_blank"
      >
        <img src={github} alt="github icon" />
      </a>
    </div>
  );
}
