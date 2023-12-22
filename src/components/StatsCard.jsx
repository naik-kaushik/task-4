import MiniCard from "./MiniCard";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const StatsCard = () => {
  const data = [
    { product: "Xiomi Redmi Note 5", popularity: 1200 },
    { product: "Apple iPhone 14", popularity: 2000 },
    { product: "Samsung Galaxy S21", popularity: 1500 },
    { product: "Google Pixel 6", popularity: 800 },
    { product: "OnePlus 9 Pro", popularity: 1800 },
    { product: "Sony Xperia 5 III", popularity: 1000 },
    { product: "LG Velvet 5G", popularity: 600 },
    { product: "Huawei P40 Pro", popularity: 900 },
    { product: "Motorola Moto G Power", popularity: 1200 },
    { product: "Nokia 8.3 5G", popularity: 700 },
  ];
  return (
    <div className="">
      <div className="w-full grid grid-row-auto h-full justify-center align-center">
        <div className="flex flex-wrap flex-row items-center justify-center my-4">
          <MiniCard value={"144K"} metric={"Orders"}></MiniCard>
          <MiniCard value={"12.9K"} metric={"Brands"}></MiniCard>
          <MiniCard value={"48.3K"} metric={"Users"}></MiniCard>
          <MiniCard value={"24.5K"} metric={"Reviews"}></MiniCard>
        </div>
        <div className="flex flex-row flex-wrap justify-center my-4">
          <LineChart className="mx-8" data={data}></LineChart>
          <BarChart className="mx-8"></BarChart>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
