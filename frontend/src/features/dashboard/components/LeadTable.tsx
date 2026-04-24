import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { deleteLead, getLeads, updateLead } from "../../../shared/utils/api";
import Loading from "../../../shared/components/Loading";
import { ArrowRight, Trash2 } from "lucide-react";

function daysLeft(date: string) {
  if (!date) return "-";

  const diff = new Date(date).getTime() - new Date().getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function getStatusStyle(status: string) {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-700";

    case "Contracted":
      return "bg-purple-100 text-purple-700";

    case "Closed":
      return "bg-green-100 text-green-700";

    default:
      return "bg-orange-100 text-orange-700";
  }
}

export default function LeadTable() {
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  async function fetchLeads() {
    setLoading(true);
    const data = await getLeads();
    setLeads(data);
    setLoading(false);
  }

  // ---------------- ACTIONS ----------------
  async function handleAction(lead: any) {
    if (lead.status === "New") {
      await updateLead(`contacted/${lead._id}`);
    } else if (lead.followUpStage === "first") {
      await updateLead(`first/${lead._id}`);
    } else if (lead.followUpStage === "second") {
      await updateLead(`second/${lead._id}`);
    } else {
      await updateLead(`final/${lead._id}`);
    }

    fetchLeads();
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?",
    );

    if (!confirmDelete) return;

    await deleteLead(id);
    fetchLeads();
  }

  // ---------------- FILTER LOGIC ----------------
  const filteredLeads = useMemo(() => {
    return leads.filter((lead: any) => {
      const matchSearch =
        lead.agency?.toLowerCase().includes(search.toLowerCase()) ||
        lead.email?.toLowerCase().includes(search.toLowerCase()) ||
        lead.type?.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" || lead.status === statusFilter;

      const matchStage =
        stageFilter === "All" || lead.followUpStage === stageFilter;

      return matchSearch && matchStatus && matchStage;
    });
  }, [leads, search, statusFilter, stageFilter]);

  useEffect(() => {
    fetchLeads();
  }, []);

  if (loading) return <Loading />;

  // ---------------- UI ----------------
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Leads Management
          </h2>

          <p className="text-sm text-gray-500">
            Total Leads: {filteredLeads.length}
          </p>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Search */}
          <input
            type="text"
            placeholder="Search agency, email, type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm"
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Contracted">Contracted</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Stage Filter */}
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm"
          >
            <option value="All">All Stages</option>
            <option value="first">First Follow-up</option>
            <option value="second">Second Follow-up</option>
            <option value="final">Final Follow-up</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-md">
          {/* HEAD */}
          <thead className="bg-gray-50 text-gray-600 uppercase text-sm tracking-wide">
            <tr>
              <th className="px-4 py-3 text-left">Agency Name</th>
              <th className="px-4 py-3 text-left">Lead Name</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Website</th>
              <th className="px-4 py-3 text-left">LinkedIn</th>

              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Follow-up</th>
              <th className="px-4 py-3 text-left">Days Left</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-100 text-sm">
            {filteredLeads.map((lead: any) => {
              const days = daysLeft(lead.followUpDate);

              return (
                <tr
                  key={lead._id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {lead.agency}
                  </td>

                  <td className="px-4 py-3 font-medium text-gray-800">
                    {lead.name}
                  </td>

                  <td className="px-4 py-3 text-gray-600">{lead.type}</td>

                  <td className="px-4 py-3 text-blue-600">{lead.email}</td>

                  <td className="px-4 py-3 text-indigo-600">
                    <Link
                      to={lead.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </Link>
                  </td>

                  <td className="px-4 py-3 text-indigo-600">
                    <Link
                      to={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </Link>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        lead.status,
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {lead.followUpDate
                      ? new Date(lead.followUpDate).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className={`px-4 py-3 text-black text-md font-bold`}>
                    {days}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <button
                        title="next step"
                        onClick={() => handleAction(lead)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg text-xs"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        title="delete"
                        onClick={() => handleDelete(lead._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
