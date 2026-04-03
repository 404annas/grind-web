import Navbar2 from "@/components/Home/Navbar2";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black px-4 text-white sm:px-8 md:px-10 pb-10">
        <Navbar2 />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 pt-36">
        <div className="flex w-full justify-center">
          <img
          loading="lazy"
            src="/kadir.jpg"
            alt="Portrait of Kadir"
            className="h-auto max-h-[450px] w-auto max-w-full rounded-[20px] border border-white/10 bg-white/5 object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
