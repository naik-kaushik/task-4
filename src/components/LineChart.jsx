import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Popularity",
      backgroundColor: "#415C15",
      borderColor: "#A3E635",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = ({ data }) => {
  const usernameArray = data.map((line) => line.product);
  const ratingsArray = data.map((line) => line.popularity);
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Product",
          font: {
            size: 24, // Increase font size for x-label
            weight: "semi-bold", // Make x-label bold
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Popularity",
          font: {
            size: 24, // Increase font size for x-label
            weight: "semi-bold", // Make x-label bold
          },
        },
      },
    },
  };
  return (
    <div className="mx-12 my-12">
      <Line
        data={{
          labels: usernameArray,
          datasets: [
            {
              label: "Popularity",
              backgroundColor: "#415C15",
              borderColor: "#A3E635",
              data: ratingsArray,
            },
          ],
        }}
        options={options}
        height={350}
        width={450}
      />
    </div>
  );
};

export default LineChart;
