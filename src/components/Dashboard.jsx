import StatsCard from "./StatsCard";

const Dashboard = () => {
  return (
    <div className="w-full px-4 text-black">
      <button
        onClick={() => {
          window.location.href = "/task-4";
        }}
        className="text-lime-500"
      >
        &lt; Back
      </button>
      <StatsCard></StatsCard>
    </div>
  );
};

export default Dashboard;
