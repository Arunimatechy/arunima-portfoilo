export default function GithubStats() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-4">
          GitHub Activity
        </h2>

        <p className="text-gray-500 mb-12">
          Consistent learning and development through
          full-stack projects, open-source contributions,
          and continuous skill improvement.
        </p>

        {/* GitHub Profile Card */}
        <div className="bg-white border rounded-3xl p-8">

          <h3 className="text-3xl font-bold mb-4">
            GitHub Profile
          </h3>

          <p className="text-gray-600 mb-6">
            Explore my repositories, projects,
            and development activity.
          </p>

          <a
            href="https://github.com/Arunimatechy"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            View GitHub Profile
          </a>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              10+
            </h3>

            <p className="text-gray-500 mt-2">
              Full Stack Projects
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              React
            </h3>

            <p className="text-gray-500 mt-2">
              Most Used Technology
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              Django
            </h3>

            <p className="text-gray-500 mt-2">
              Backend Expertise
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}