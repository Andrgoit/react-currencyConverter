import styles from "@/components/Title/Title.module.css";

export default function Title({ title = "" }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
