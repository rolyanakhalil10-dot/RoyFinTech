import Cards from "./Cards";
import RecentActivity from "./RecentActivity";

export default function DashboardContent() {
  return (
    <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
      <Cards />
      <RecentActivity />
    </div>
  );
}
