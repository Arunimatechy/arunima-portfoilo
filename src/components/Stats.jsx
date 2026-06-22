export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-5xl font-bold">
              10+
            </h3>

            <p className="mt-3 text-gray-500">
              Full Stack Projects
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-5xl font-bold">
              React + Django
            </h3>

            <p className="mt-3 text-gray-500">
              Core Stack
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-5xl font-bold">
              REST APIs
            </h3>

            <p className="mt-3 text-gray-500">
              Backend Development
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}