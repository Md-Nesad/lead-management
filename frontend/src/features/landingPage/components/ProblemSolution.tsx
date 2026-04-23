function ProblemSolution() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Still Managing Leads in Spreadsheets?
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          <div className="p-4 border rounded-lg bg-red-50">
            <p>❌ Forgetting follow-ups</p>
            <p>❌ Losing potential clients</p>
            <p>❌ No centralized system</p>
          </div>

          <div className="p-4 border rounded-lg bg-green-50">
            <p>✔️ Automated follow-ups</p>
            <p>✔️ Organized lead tracking</p>
            <p>✔️ Centralized dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
