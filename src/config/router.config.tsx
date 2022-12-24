import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/Dashboard.page";
import DashboardDetail from "../pages/DashboardDetail.page";
import { LoginPage } from "../pages/LoginPage.page";
import TicketPage from "../pages/TicketPage.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ticket" replace={true} />,
  },

  {
    path: "/ticket",
    element: <TicketPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/:ticketId",
    element: <DashboardDetail />,
  },
]);
