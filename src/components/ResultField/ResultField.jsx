import styles from "@/components/ResultField/ResultField.module.css";
export default function ResultField({ convertFrom, convertTo, rate, result }) {
  return (
    <div>
      <div>
        {/* {result !== isNaN ? <p>Total:{result}</p> : <p>Somesing went wrong!</p>} */}
        Rate:{rate}
      </div>
    </div>
  );
}
