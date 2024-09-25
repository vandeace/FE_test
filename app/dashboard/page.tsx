import Title from "@/components/page-title";
import DashboardCharts from "./components/dashboard-charts";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">
      <Title title="Dashboard" />
      <DashboardCharts />
    </div>
  );
};

export default HomePage;
