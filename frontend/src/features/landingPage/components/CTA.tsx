import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-6 py-20 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Start Managing Your Leads Smarter Today
      </h2>

      <p className="mt-4 text-indigo-100">
        Join agencies and freelancers already closing more deals.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-indigo-600 rounded-md"
        >
          Login
        </Link>

        <Link
          to="/dashboard"
          className="px-6 py-3 border border-white rounded-md"
        >
          Enter Dashboard →
        </Link>
      </div>
    </section>
  );
}

export default CTA;
