const projects = [
  {
    title: "AI Social Analytics Platform",
    description:
      "Built a SaaS-style social media analytics platform with sentiment analysis, emotion detection, authentication, dashboards, and historical insights.",
    tech: [
      "React",
      "Redux Toolkit",
      "Django",
      "PostgreSQL",
      "JWT",
    ],
    github:
      "https://github.com/Arunimatechy/ai-social-analytics",
    live:
      "https://ai-social-analytics-wine.vercel.app/",
  },

  {
    title: "AI Job Portal – Intelligent Recruitment Platform",
    description:
      "Developed an AI-powered job portal with recruiter and candidate dashboards, job management, applications, resume handling, AI mock interviews, and offer letter generation.",
    tech: [
      "React",
      "Redux Toolkit",
      "Django",
      "PostgreSQL",
      "JWT",
      "OpenRouter AI",
    ],
    github:
      "https://github.com/Arunimatechy/ai-job-portal",
    live:
      "https://ai-job-portal-f52vecpg6-arunimas-projects-140d0a2a.vercel.app/",
  },

  {
    title: "Multi Vendor Ecommerce Platform",
    description:
      "Developed a full-stack ecommerce marketplace with vendor dashboards, product management, authentication, cart, and order workflows.",
    tech: [
      "React",
      "Redux",
      "Django",
      "PostgreSQL",
    ],
    github:
      "https://github.com/Arunimatechy/multi-vendor-ecommerce",
    live:
      "https://multi-vendor-ecommerce-hazel.vercel.app/",
  },

  {
    title: "Nexa AI Workspace",
    description:
      "AI-powered productivity workspace integrating OpenRouter APIs, markdown rendering, and modern state management.",
    tech: [
      "React",
      "Redux",
      "Tailwind",
      "OpenRouter",
    ],
    github:
      "https://github.com/Arunimatechy/nexa-ai-workspace",
    live:
      "https://nexa-ai-workspace.vercel.app/",
  },

  {
    title: "OrderFlow Dashboard",
    description:
      "Order management dashboard featuring analytics, charts, CRUD operations, and Redux Toolkit.",
    tech: [
      "React",
      "Redux",
      "Recharts",
    ],
    github:
      "https://github.com/Arunimatechy/OrderFlowDashboard",
    live:
      "https://order-flow-dashboard-mauve.vercel.app/",
  },
];



export default function Projects() {

  return (

    <section
      id="projects"
      className="py-24"
    >

      <div className="max-w-6xl mx-auto px-6">


        <h2 className="text-5xl font-bold mb-4">
          Featured Projects
        </h2>


        <p className="text-gray-500 mb-12">
          Selected full-stack and AI projects.
        </p>



        <div className="space-y-8">


          {projects.map((project)=>(


            <div
              key={project.title}
              className="border rounded-3xl p-10 hover:shadow-lg transition"
            >


              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>


              <p className="text-gray-600 mt-4">
                {project.description}
              </p>



              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech)=>(

                  <span
                    key={tech}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>



              <div className="flex gap-4 mt-8">


                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-xl"
                >
                  GitHub
                </a>


                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="border px-6 py-3 rounded-xl"
                >
                  Live Demo
                </a>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

}