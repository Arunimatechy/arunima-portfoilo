import {
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt
} from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white border p-8 rounded-3xl">
            <FaReact className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Frontend
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>React.js</li>
              <li>Redux Toolkit</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>

          <div className="bg-white border p-8 rounded-3xl">
            <FaPython className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Backend
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Python</li>
              <li>Django</li>
              <li>DRF</li>
              <li>JWT Auth</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="bg-white border p-8 rounded-3xl">
            <FaDatabase className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Database
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
            </ul>
          </div>

          <div className="bg-white border p-8 rounded-3xl">
            <FaGitAlt className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Tools
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Git</li>
              <li>GitHub</li>
              <li>Postman</li>
              <li>Vercel</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}