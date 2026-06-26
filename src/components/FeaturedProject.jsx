import aiJob from "../assets/images/ai-job.png";

export default function FeaturedProject() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Featured Project
        </p>


        <h2 className="text-5xl font-bold mb-12">
          AI Job Portal
        </h2>



        <div className="grid lg:grid-cols-2 gap-12 items-center">



          {/* IMAGE */}

          <div className="bg-white p-4 rounded-3xl border shadow-lg">

            <img
              src={aiJob}
              alt="AI Job Portal Dashboard"
              className="w-full rounded-2xl"
            />

          </div>





          {/* CONTENT */}

          <div>


            <p className="text-lg text-gray-600 leading-relaxed mb-8">

              Built a full-stack AI-powered job portal platform
              with candidate and recruiter dashboards, job posting,
              application tracking, AI mock interviews, resume handling,
              and automated offer letter generation.

            </p>





            <div className="grid grid-cols-2 gap-4">



              <div className="border rounded-xl p-4">
                ✓ Job Posting
              </div>


              <div className="border rounded-xl p-4">
                ✓ Candidate Dashboard
              </div>


              <div className="border rounded-xl p-4">
                ✓ Recruiter Dashboard
              </div>


              <div className="border rounded-xl p-4">
                ✓ AI Mock Interview
              </div>


              <div className="border rounded-xl p-4">
                ✓ Resume Upload
              </div>


              <div className="border rounded-xl p-4">
                ✓ AI Offer Letter
              </div>


            </div>





            <div className="flex gap-4 mt-8">



              <a
                href="https://github.com/Arunimatechy/ai-job-portal"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl"
              >

                GitHub

              </a>





              <a
                href="https://ai-job-portal-f52vecpg6-arunimas-projects-140d0a2a.vercel.app/"
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