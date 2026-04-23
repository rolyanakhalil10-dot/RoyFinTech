import Header from "./Header";
import DashboardContent from "./DashboardContent";
export default function MainContent() {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden bg-prestige-charcoal-light">
      <Header />
      <DashboardContent />
    </main>
  );
}

