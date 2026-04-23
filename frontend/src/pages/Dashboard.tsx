import Calendar from "../features/dashboard/components/Calender";
import Sidebar from "../features/dashboard/components/common/Sidebar";
import Topbar from "../features/dashboard/components/common/Topbar";
import LeadTable from "../features/dashboard/components/LeadTable";
import Pipeline from "../features/dashboard/components/Pipeline";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Lead Table */}
          <div className="lg:col-span-2 space-y-6">
            <LeadTable />
            <Pipeline />
          </div>

          {/* RIGHT: Calendar */}
          <div>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
