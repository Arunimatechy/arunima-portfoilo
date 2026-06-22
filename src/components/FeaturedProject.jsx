import aiSocial from "../assets/images/ai-social.png";

export default function FeaturedProject() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Featured Project
        </p>

        <h2 className="text-5xl font-bold mb-12">
          AI Social Analytics Platform
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="bg-white p-4 rounded-3xl border shadow-lg">
            <img
              src={aiSocial}
              alt="AI Social Analytics Dashboard"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Built a SaaS-style analytics platform that analyzes
              social media content using AI-powered sentiment analysis,
              emotion detection, authentication, and interactive dashboards.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="border rounded-xl p-4">
                ✓ Sentiment Analysis
              </div>

              <div className="border rounded-xl p-4">
                ✓ Emotion Detection
              </div>

              <div className="border rounded-xl p-4">
                ✓ JWT Authentication
              </div>

              <div className="border rounded-xl p-4">
                ✓ Analytics Dashboard
              </div>

              <div className="border rounded-xl p-4">
                ✓ PostgreSQL Database
              </div>

              <div className="border rounded-xl p-4">
                ✓ REST APIs
              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/Arunimatechy/ai-social-analytics"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl"
              >
                GitHub
              </a>

              <a
                href="https://ai-social-analytics-wine.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="border px-6 py-3 rounded-xl"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}