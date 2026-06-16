import github from "@/assets/icons/github.svg";
import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Andrgoit/react-currencyConverter"
        target="_blank"
        className={styles.footerLink}
      >
        <img src={github} alt="github icon" className={styles.footerImage} />
      </a>
    </footer>
  );
}
