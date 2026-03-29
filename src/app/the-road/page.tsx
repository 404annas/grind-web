"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import Navbar2 from "@/components/Home/Navbar2";

const faqData = [
  {
    q: "What inspired you to make The Road?",
    a: "Twelve years ago, I made a journey of my own — walking from Greece to Sweden as a refugee. Before I left, I was planning to take the same route shown in the film, but people warned me about a group that tried and never made it. Their story became a cautionary tale passed around quietly, almost forgotten. I never forgot. I promised myself that if I survived, I’d one day turn their journey into a film — not just to honor their memory, but to show the world the kind of invisible suffering that was happening, and continues to happen, in silence.",
  },
  {
    q: "Is The Road based on a true story?",
    a: "Yes. While it’s a fictionalized account, almost every moment in the film is drawn from true experiences shared with me by Syrian refugees. The characters are composites of real people I’ve spoken to, and the emotional core of the story — the sacrifices, the fear, the hope — is entirely real.",
  },
  {
    q: "What does the title The Road mean to you?",
    a: "The road is more than just a path from one country to another — it’s a symbol of everything the characters endure. It represents hope, loss, resilience, and the unknown. It’s physical, but also emotional. For many refugees, “the road” becomes a defining chapter in their lives — a test of spirit and survival.",
  },
  {
    q: "How did you manage to shoot in the snow with a small budget?",
    a: "We didn’t use fake snow or studio tricks. Everything you see is natural. We shot in real snow, in freezing temperatures, with a skeleton crew. The cold you see on screen? That was real. We planned meticulously, shot fast, and let the weather become part of the story.",
  },
  {
    q: "Why did you choose to have the characters speak only Arabic?",
    a: "Authenticity. These characters wouldn’t speak English in that situation, and I wasn’t going to sanitize that for the sake of convenience. Subtitles are a small price to pay for emotional truth. Language is part of identity.",
  },
  {
    q: "What do you want audiences to take away from the film?",
    a: "That refugees are not statistics or headlines — they are people with dreams, humor, stubbornness, and deep love. If you cry for Yara, even a little, then you’ve seen the humanity behind the label “refugee.” That’s all I want.",
  },
  {
    q: "What filmmakers influenced your work on The Road?",
    a: "I admire filmmakers like Alejandro G. Iñárritu, who blend intimacy with epic scope, and Denis Villeneuve, whose visual storytelling is deeply immersive and emotionally precise.",
  },
  {
    q: "If you could go back, what would you do differently?",
    a: "I’d give myself more time to rehearse with the actors. We were racing the weather, so we had to dive in fast. But even so, the performances were raw and real.",
  },
  {
    q: "How did you cast the film?",
    a: "I cast a mix of trained actors and newcomers, many of whom had personal connections to refugee experiences. One actor broke down between takes because it was so personal to him.",
  },
  {
    q: "Where do you see yourself after The Road?",
    a: "This film is just the beginning. I want to keep telling stories that matter — stories that walk the line between poetic and political. I’ll bring a hundred stories with me.",
  },
];

const ProjectPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First one open by default

  const roadImages = [
    "/road5.jpg",
    "/road1.jpeg",
    "/road2.jpg",
    "/road3.jpg",
    "/road4.jpg",
    "/road6.jpg",
    "/road7.jpg",
    "/road8.jpg",
    "/road9.jpg",
    "/road10.jpg",
    "/road11.jpg",
    "/road12.jpg",
    "/road13.jpg",
    "/road14.jpg",
    "/road15.jpg",
    "/road16.jpg",
  ];
  const castImages = [
    "/cast1.jpeg",
    "/cast2.jpg",
    "/cast3.jpeg",
    "/cast4.JPEG",
    "/cast5.jpeg",
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar2 />

      {/* Hero Section */}
      <section className="pt-40 pb-10 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic"
        >
          The <span className="italic text-white">Road</span>
        </motion.h1>

        <div className="max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-light leading-normal text-gray-200">
            "When a refugee’s journey to safety falls apart, a devoted uncle
            must carry his sick niece through the snow, knowing he may not reach
            the other side."
          </p>
        </div>
      </section>

      {/* Synopsis & Statement Grid */}
      <section className="px-6 py-10 bg-gradient-to-b from-black to-[#05080a]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-8">
              Synopsis
            </h2>
            <p className="text-base text-gray-300 leading-normal font-light">
              In the dead of winter 2012, seven Syrian refugees trek through the
              icy forests between Turkey and Bulgaria. Among them is Karim and
              his 12-year-old niece Yara, burning with fever, barely clinging to
              life. With distant dogs barking and border patrols closing in, the
              group battles exhaustion, fear, and the punishing cold as they
              risk everything for the promise of Europe.
              <br />
              <br />
              Tensions rise, and the group splinters—some give up, but Karim
              continues forward, carrying Yara on his back. When the patrols
              close in, panic erupts and the others flee.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-8 pt-10">
              Director Statement
            </h2>
            <div className="text-base text-gray-300 leading-normal font-light space-y-6 max-w-3xl">
              <p>
                For me, The Road is more than just a film—it's a deeply personal
                story.
              </p>
              <p>
                I know what it feels like to walk through unfamiliar lands, to
                move forward with nothing but hope and exhaustion in my bones.
              </p>
              <p>
                "But The Road is not just about suffering. It's about
                resilience. About the human spirit that refuses to break, even
                when the world turns its back."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Video (Wireframe style) */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold uppercase text-white mb-10">
          Production Vlog
        </h2>
        <div className="w-full flex justify-center overflow-hidden">
          <iframe
            className="w-[809px] h-[455px] max-w-full"
            src="https://www.youtube.com/embed/KLyFGT-RKeU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Gallery: The Road (3 Items per row) */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold uppercase text-white mb-10">
          Visual Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {roadImages.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="aspect-square bg-[#0a0a0a] rounded-sm overflow-hidden group relative"
            >
              <Image
                src={src}
                alt={`Road ${idx + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery: Cast */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold uppercase text-white mb-10 text-center">
          The Cast
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {castImages.map((src, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative border-2 border-white/10">
                <Image
                  src={src}
                  alt={`Cast ${idx + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 tracking-tighter uppercase italic">
          Questions <span className="italic text-white">&</span> Answers
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b last:border-0 border-white/10">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left group cursor-pointer"
              >
                <span
                  className={`text-lg transition-colors ${openFaq === index ? "text-white" : "text-white"}`}
                >
                  {index + 1}. {faq.q}
                </span>
                <div className="text-white transition-transform duration-300">
                  {openFaq === index ? <X size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-400 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Tribute */}
      <footer className="py-10 px-6 text-center border-t border-white/5">
        <p className="text-white text-xl font-bold uppercase mb-8">
          In Memory
        </p>
        <p className="max-w-2xl mx-auto text-gray-400 leading-normal">
          "This film is dedicated to those who perished in the fight for
          freedom, and to the countless others whose stories will never be
          told."
        </p>
        <div className="mt-10 text-xs uppercase opacity-50">
          Directed by Kadir Mayel
        </div>
      </footer>
    </main>
  );
};

export default ProjectPage;
