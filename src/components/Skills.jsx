import {
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaCloud,
  FaRobot
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


        <div className="grid md:grid-cols-3 gap-6">



          {/* Core Stack */}

          <div className="bg-white border p-8 rounded-3xl">

            <FaPython className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Core Stack
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Python</li>
              <li>React.js</li>
              <li>Redux Toolkit</li>
              <li>Django</li>
              <li>REST API</li>
            </ul>

          </div>





          {/* Frontend */}

          <div className="bg-white border p-8 rounded-3xl">

            <FaReact className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Frontend
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>JavaScript</li>
              <li>React Hooks</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>

          </div>





          {/* Backend */}

          <div className="bg-white border p-8 rounded-3xl">

            <FaDatabase className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Backend
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Django REST Framework</li>
              <li>JWT Authentication</li>
              <li>API Development</li>
              <li>CRUD Operations</li>
              <li>Authentication</li>
            </ul>

          </div>






          {/* Database */}

          <div className="bg-white border p-8 rounded-3xl">

            <FaDatabase className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Database
            </h3>

            <ul className="space-y-2 text-gray-600">

              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
              <li>Django ORM</li>

            </ul>

          </div>






          {/* AI */}

          <div className="bg-white border p-8 rounded-3xl">

            <FaRobot className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              AI Integration
            </h3>

            <ul className="space-y-2 text-gray-600">

              <li>OpenRouter API</li>
              <li>AI Features</li>
              <li>Prompt Engineering</li>
              <li>AI Automation</li>

            </ul>

          </div>







          {/* Tools */}

          <div className="bg-white border p-8 rounded-3xl">

            <FaGitAlt className="text-4xl mb-4" />

            <h3 className="font-bold text-xl mb-4">
              Tools & Cloud
            </h3>


            <ul className="space-y-2 text-gray-600">

              <li>Git</li>
              <li>GitHub</li>
              <li>Postman</li>
              <li>Cloudinary</li>
              <li>Vercel</li>
              <li>Render</li>

            </ul>


          </div>




        </div>


      </div>


    </section>
  );
}