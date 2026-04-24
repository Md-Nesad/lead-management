import { useEffect, useState } from "react";
import LeadTable from "../features/dashboard/components/LeadTable";
import StatsCards from "../features/dashboard/components/StatsCard";
import { getStats } from "../shared/utils/api";

import { Users, UserPlus, Handshake, CheckCircle } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    newLeads: 0,
    contacted: 0,
    closed: 0,
  });

  async function fetchStats() {
    const data = await getStats();
    setStats(data);
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <div className="p-6  gap-6">
          {/* LEFT: Lead Table */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <StatsCards
                title="Total Leads"
                value={stats.total}
                icon={Users}
                color="bg-indigo-500 text-indigo-500"
              />

              <StatsCards
                title="New Leads"
                value={stats.newLeads}
                icon={UserPlus}
                color="bg-blue-500 text-blue-500"
              />

              <StatsCards
                title="Contracted"
                value={stats.contacted}
                icon={Handshake}
                color="bg-purple-500 text-purple-500"
              />

              <StatsCards
                title="Closed"
                value={stats.closed}
                icon={CheckCircle}
                color="bg-green-500 text-green-500"
              />
            </div>
            <LeadTable />
          </div>

          {/* RIGHT: Calendar */}
          {/* <div>
            <Calendar />
          </div> */}
        </div>
      </div>
    </div>
  );
}
