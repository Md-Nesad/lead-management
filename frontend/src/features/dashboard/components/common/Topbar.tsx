export default function Topbar() {
  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3">
        <input
          placeholder="Search leads..."
          className="border px-3 py-1 rounded-md text-sm"
        />

        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
          A
        </div>
      </div>
    </div>
  );
}
