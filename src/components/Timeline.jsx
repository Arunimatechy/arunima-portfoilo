export default function Timeline() {
  const timeline = [
    {
      year: "2025",
      title: "Started Frontend Development",
    },
    {
      year: "2025",
      title: "Built React Applications",
    },
    {
      year: "2026",
      title: "Built Full Stack SaaS Projects",
    },
    {
      year: "2026",
      title: "Open To Software Engineering Roles",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Journey
        </h2>

        <div className="space-y-8">

          {timeline.map((item) => (
            <div
              key={item.year + item.title}
              className="border-l-4 pl-6 py-2"
            >
              <p className="font-bold text-xl">
                {item.year}
              </p>

              <p className="text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}