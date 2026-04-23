import { Link } from "react-router-dom";

function DashboardPreview() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Simple Yet Powerful Dashboard</h2>

        <div className="mt-10 border rounded-xl shadow-md p-10 text-gray-400">
          📊 Add Screenshot / UI Mockup Here
        </div>

        <Link
          to="/dashboard"
          className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Enter Dashboard →
        </Link>
      </div>
    </section>
  );
}

export default DashboardPreview;
