import DashboardHome from "../components/dashboard/DashboardHome";
import { useCheckLoggedIn } from "../hooks/useCheckLoggedIn";

export default function DashboardPage() {
  useCheckLoggedIn();
  return <DashboardHome />;
}
