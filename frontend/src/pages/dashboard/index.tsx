import { DashboardView } from "@/features/dashboard";
import { Header } from "@/widgets/header/ui/Header";

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" showSearch={true} />
      <DashboardView />
    </>
  );
} 