import Stats from "./Stats";
const StatsSection = () => (
  <div className="flex items-center space-x-10 px-6 pt-6 rounded-lg mt-6 justify-center sm:justify-normal ">
    <Stats title="Transactions" value="$ 12M+" />
    <Stats title="Active Users" value="1200+" />
  </div>
);
export default StatsSection;
