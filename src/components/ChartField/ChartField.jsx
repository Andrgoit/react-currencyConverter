import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "@/components/ChartField/ChartField.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function ChartField({ chartData }) {
  if (chartData.length > 0) {
    const { base, quote } = chartData[0];

    return (
      <div className={styles.chartFieldWrapper}>
        <Line
          data={{
            labels: chartData.map((data) => data.date),
            datasets: [
              {
                label: `${base}/${quote}`,
                data: chartData.map((data) => data.rate),
                backgroundColor: "#12816e",
                borderColor: "#12816e",
              },
            ],
          }}
        />
      </div>
    );
  }
}
