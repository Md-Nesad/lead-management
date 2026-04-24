import { useState } from "react";
import Sidebar from "../features/dashboard/components/common/Sidebar";
import Topbar from "../features/dashboard/components/common/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar title="Dashboard" onMenuClick={toggleSidebar} />

        <div className="">
          {/* LEFT: Lead Table */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
