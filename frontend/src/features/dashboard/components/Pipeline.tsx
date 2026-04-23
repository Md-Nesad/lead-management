const stages = [
  { title: "New", count: 5 },
  { title: "Contacted", count: 3 },
  { title: "Proposal", count: 2 },
  { title: "Closed", count: 4 },
];

export default function Pipeline() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Pipeline</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stages.map((stage, i) => (
          <div key={i} className="p-3 border rounded-lg text-center bg-gray-50">
            <p className="font-medium">{stage.title}</p>
            <p className="text-indigo-600 font-bold">{stage.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
