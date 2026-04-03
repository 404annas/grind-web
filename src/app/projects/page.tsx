import Navbar2 from "@/components/Home/Navbar2";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-black px-4 pb-10 text-white sm:px-8 md:px-10">
      <Navbar2 />

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 pt-36 text-center">
        <h1 className="font-lime text-4xl uppercase tracking-tight italic sm:text-5xl md:text-6xl">
          Projects
        </h1>
        <p className="text-base text-white/70 sm:text-base md:text-lg">
          Projects coming soon
        </p>
      </div>
    </main>
  );
};

export default ProjectsPage;
