export default function Leetcode() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-4">
          Problem Solving
        </h2>

        <p className="text-gray-500 mb-12">
          Continuous practice in Data Structures,
          Algorithms, and coding interviews.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="border rounded-3xl p-8">
            <h3 className="text-5xl font-bold">
              250+
            </h3>

            <p className="text-gray-500 mt-2">
              Problems Solved
            </p>
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="font-bold text-xl">
              Arrays & Strings
            </h3>

            <p className="text-gray-500 mt-2">
              Core problem-solving foundation.
            </p>
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="font-bold text-xl">
              Trees & Graphs
            </h3>

            <p className="text-gray-500 mt-2">
              Traversals, DFS, BFS, shortest paths.
            </p>
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="font-bold text-xl">
              Dynamic Programming
            </h3>

            <p className="text-gray-500 mt-2">
              Optimization and advanced algorithms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}