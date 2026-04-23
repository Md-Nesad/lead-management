function Features() {
  const features = [
    { title: "Lead Tracking", desc: "Store all leads in one place." },
    { title: "Follow-Up Scheduler", desc: "Never miss a client again." },
    { title: "Status Pipeline", desc: "Track leads from new to closed." },
    { title: "Notes & Messages", desc: "Save client communication." },
    { title: "Project Tracking", desc: "Manage deadlines & payments." },
    { title: "Analytics", desc: "Track conversion performance." },
  ];

  return (
    <section id="features" className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Everything You Need to Manage Leads
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
