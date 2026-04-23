import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-5 hidden md:block">
      <h1 className="text-xl font-bold text-indigo-600 mb-8">LeadFlow</h1>

      <nav className="space-y-4 text-sm">
        <Link className="block hover:text-indigo-600" to="/dashboard">
          Dashboard
        </Link>
        <Link className="block hover:text-indigo-600" to="/leads">
          Leads
        </Link>
        <Link className="block hover:text-indigo-600" to="/pipeline">
          Pipeline
        </Link>
        <Link className="block hover:text-indigo-600" to="/calendar">
          Calendar
        </Link>
      </nav>
    </div>
  );
}
