import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="px-6 py-20 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Manage Leads, Track Follow-ups & Close More Deals Faster
      </h1>

      <p className="mt-6 text-gray-600 text-lg">
        A powerful lead management system designed for agencies and freelancers
        to track, organize, and convert leads efficiently.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/login"
          className="px-6 py-3 rounded-md border hover:bg-gray-100"
        >
          Login
        </Link>

        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Enter Dashboard →
        </Link>
      </div>

      <div className="mt-10 bg-white border rounded-xl shadow-md p-6 text-gray-400">
        📊 Dashboard Preview Image Here
      </div>
    </section>
  );
}

export default Hero;
