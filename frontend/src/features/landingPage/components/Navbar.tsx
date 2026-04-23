import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-xl font-bold text-indigo-600">LeadFlow</div>

      <nav className="flex items-center gap-6 text-sm">
        <a href="#features" className="hover:text-indigo-600">
          Features
        </a>
        <a href="#about" className="hover:text-indigo-600">
          About
        </a>

        <Link
          to="/login"
          className="px-4 py-2 rounded-md border text-sm hover:bg-gray-100"
        >
          Login
        </Link>

        <Link
          to="/dashboard"
          className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Enter Dashboard →
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
