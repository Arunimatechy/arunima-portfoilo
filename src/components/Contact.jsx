import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Let's Build Something Great
        </h2>

        <p className="text-gray-400 mt-6">
          Open to Software Engineering,
          Full Stack Development,
          and Internship Opportunities.
        </p>

        <div className="flex justify-center gap-8 mt-12 text-3xl">

          <a
            href="mailto:sarunima225@gmail.com"
          >
            <FaEnvelope />
          </a>

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