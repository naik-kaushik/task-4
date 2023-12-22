import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Popularity",
      data: [125, 332, 300,225,108,500],
      backgroundColor: "#A3E635",
    },
    {
      label: "Price",
      data: [100, 200, 303,222,111,139],
      backgroundColor: "#415C15",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const BarChart = () => {
  return (
    <div className="mx-12 my-12">
      <Bar options={options} data={data} height={350} width={450} />
    </div>
  );
};

export default BarChart;
