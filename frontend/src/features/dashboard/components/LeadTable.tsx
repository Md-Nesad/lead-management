const leads = [
  { name: "John Doe", email: "john@gmail.com", status: "New" },
  { name: "Sarah Smith", email: "sarah@gmail.com", status: "Contacted" },
  { name: "Mike Ross", email: "mike@gmail.com", status: "Closed" },
];

export default function LeadTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Leads</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, i) => (
            <tr key={i} className="border-b">
              <td className="py-2">{lead.name}</td>
              <td>{lead.email}</td>
              <td>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    lead.status === "New"
                      ? "bg-blue-100 text-blue-600"
                      : lead.status === "Contacted"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
