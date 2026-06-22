import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-gray-500 text-lg">
          Software Engineer
        </p>

        <h1 className="text-7xl md:text-8xl font-bold mt-4">
          Arunima S
        </h1>

        <h2 className="text-2xl md:text-4xl text-gray-600 mt-6">
          React • Django • PostgreSQL • AI Applications
        </h2>

        <p className="max-w-3xl mt-8 text-lg text-gray-600 leading-relaxed">
          Full Stack Developer focused on building scalable
          web applications, REST APIs, and AI-powered SaaS
          products using React.js, Django, PostgreSQL,
          and modern cloud platforms.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">

          <a
            href="#projects"
            className="bg-black text-white px-8 py-4 rounded-xl"
          >
            View Projects
          </a>

          <a
            href="/Arunima_Resume.pdf"
            className="border px-8 py-4 rounded-xl"
          >
            Resume
          </a>

        </div>

        <div className="flex gap-6 text-3xl mt-10">

          <a
            href="https://github.com/Arunimatechy"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/arunimaSaru"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}