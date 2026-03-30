"use client";

import Navbar2 from "@/components/Home/Navbar2";

const ProjectPage = () => {
  const images = [
    "/EOTY-1.jpeg",
    "/EOTY-2.jpeg",
    "/EOTY-3.jpeg",
    "/EOTY-4.jpeg",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 pt-40">
      <Navbar2 />
      <article className="max-w-4xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-lime font-black uppercase tracking-tighter leading-none mb-6 italic">
          Employee <span className="italic">of the Year</span>
        </h1>

        {/* Tag */}
        <div className="inline-block border border-dashed border-gray-500 px-4 py-1 text-xs md:text-sm font-medium uppercase tracking-widest mb-16">
          Short Film
        </div>

        {/* Sections */}
        <section className="space-y-16 mb-10 md:mb-20">
          {/* Logline */}
          <div>
            <h2 className="text-xl md:text-2xl font-lime font-bold uppercase tracking-tight mb-6">
              Logline
            </h2>
            <p className="text-sm md:text-base leading-relaxed font-reegular max-w-3xl mx-auto">
              Kevin, a burnt-out office worker desperate for success, discovers
              a pill that gives him 60 seconds of superhuman speed — but at the
              cost of rapidly aging his body. As he chases recognition, the
              clock on his life begins ticking faster than ever.
            </p>
          </div>

          {/* Director Statement */}
          <div>
            <h2 className="text-xl md:text-2xl font-lime font-bold uppercase tracking-tight mb-6">
              Director Statement
            </h2>
            <div className="text-sm md:text-base leading-relaxed font-regular space-y-4 max-w-3xl mx-auto text-center md:text-center">
              <p>
                I used to be an engineer, working long hours in an office, day
                after day, constantly looking forward to the weekend. Over time,
                I realized life was quietly slipping through my fingers. That
                realization forced me to stop and reevaluate everything.
              </p>
              <p>
                Employee of the Year is a personal exploration of the darker
                side of corporate culture — a world where employees are
                overworked, undervalued, and pushed to the brink. With this
                film, I want to shed light on the mental toll such an
                environment can take. It’s a surreal and stylized reflection of
                what happens when ambition collides with burnout — and what
                we’re willing to sacrifice just to feel seen.
              </p>
            </div>
          </div>
        </section>

        {/* Credits */}
        <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center border-t border-black/10 pb-10">
          <div>
            <h3 className="text-lg font-bold font-lime uppercase tracking-tighter mb-4">
              Cast
            </h3>
            <ul className="text-base font-regular space-y-1">
              <li>
                Conner Downey{" "}
                <span className="text-sm opacity-60">As Kevin</span>
              </li>
              <li>Dannell Brown</li>
              <li>Charles Dumont</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase font-lime tracking-tighter mb-4">
              DP
            </h3>
            <p className="text-base font-medium">Shubham Gosalia</p>
          </div>
        </footer>

        {/* Video & Image Grid */}
        <section className="space-y-4 mb-10">
          {/* Full-width video at top */}
          <div className="w-full bg-gray-200 overflow-hidden rounded-sm">
            <video
              src="/empVid-compressed.mp4"
              className="w-full h-auto aspect-video object-cover"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="aspect-video bg-gray-200 overflow-hidden rounded-sm"
              >
                <img
                  src={src}
                  alt={`Scene ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default ProjectPage;
