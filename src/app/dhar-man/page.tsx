import React from "react";
import Navbar2 from "@/components/Home/Navbar2";
import WorkCards from "@/components/Home/ProjectCards";

type DharCard = {
  src: string;
  title: string;
  rotation: number;
  position: string;
  z: string;
};

const dharVideos: DharCard[] = Array.from({ length: 12 }, (_, index) => ({
  src: `/dhar-vid${index + 1}.mp4`,
  title: `Dhar Vid ${index + 1}`,
  rotation: [3, -3, 5][index % 3],
  position: ["lg:-translate-y-3", "lg:-translate-y-4", "lg:translate-y-2"][
    index % 3
  ],
  z: ["z-20", "z-20", "z-30"][index % 3],
}));

const chunkedCards: DharCard[][] = [];
for (let index = 0; index < dharVideos.length; index += 3) {
  chunkedCards.push(dharVideos.slice(index, index + 3));
}

const Work = () => {
  return (
    <div data-navbar-theme="dark" className="relative bg-black text-white pt-20">
      <Navbar2 />
      {chunkedCards.map((cards, index) => (
        <WorkCards
          key={`dhar-row-${index + 1}`}
          title={
            index === 0 ? (
              <>
                lets take a look <br /> at some stuff!
              </>
            ) : (
              ""
            )
          }
          cards={cards}
        />
      ))}
    </div>
  );
};

export default Work;
