import React from "react";
const projects = [
  
  {
    id: 2,
    name: "Cosmoblog",
    description: "A blogging platform for astronomy enthusiasts.",
    laptop_image: "src/assets/projects/cosmoblog_laptop.png",
    mobile_image: "src/assets/projects/cosmoblog_mobile.png",
    link: "https://cosmoblog.vercel.app/",
  },
  {
    id: 3,
    name: "Quizzer",
    description: "An interactive quiz app with custom quiz topics",
    laptop_image: "src/assets/projects/quizzer_laptop2.png",
    mobile_image: "src/assets/projects/quizzer_mobile.png",
    link: "https://quiz-generating-app.vercel.app/",
  },
  {
    id: 4,
    name: "Solwalls",
    description: "A platform for creating and sharing anime style wallpapers.",
    laptop_image: "src/assets/projects/solwalls_laptop.png",
    mobile_image: "src/assets/projects/solwalls_mobile.png",
    link: "https://solwalls.vercel.app/",
  },
  {
    id: 5,
    name: "Watchworth",
    description: "A movie discovery app with recommendations and reviews.",
    laptop_image: "src/assets/projects/watchwoth_laptop.png",
    mobile_image: "src/assets/projects/watchwoth_mobile.png",
    link: "https://watch-worth-app.vercel.app/",
  },
  {
    id: 1,
    name: "Chatwaves",
    description: "A messaging app with real-time communication features.",
    laptop_image: "src/assets/projects/chatwaves_laptop.png",
    mobile_image: "src/assets/projects/chatwaves_mobile.png",
    link: "https://chatwaves.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      className="min-h-screen mt-12 "
      id="projects"
    >
      <div className="max-w-screen-lg">
      <h2 className="md:text-5xl sm:text-3xl p-3 text-center my-10  ">
        Recent Projects
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4">
  {projects.map((project, index) => (
    <div
      key={index}
      className="w-full max-w-sm  p-2 mx-2 border-2 border-gray-800 rounded-md"
    >
      <div className="relative w-full group cursor-pointer">
        <img
          src={project.laptop_image}
          alt="Project View"
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center drop-shadow-sm">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-gray-700 text-white py-1 px-2 rounded hover:bg-gray-400 cursor-pointer"
          >
            Go to project
          </a>
        </div>
        <div className="p-3">
          <h3 className="text-xl font-semibold text-center text-gray-800">
            {project.name}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Projects;
