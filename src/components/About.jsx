import React from "react";

// const tools = [
//   { id: 1, name: "React", iconClass: "fa-react", iconColor: "text-blue-600" },
//   {
//     id: 2,
//     name: "HTML5",
//     iconClass: "fa-html5",
//     iconColor: "text-orange-600",
//   },
//   {
//     id: 3,
//     name: "CSS3",
//     iconClass: "fa-css3-alt",
//     iconColor: "text-blue-500",
//   },
//   {
//     id: 4,
//     name: "JavaScript",
//     iconClass: "fa-js-square",
//     iconColor: "text-yellow-500",
//   },
//   {
//     id: 5,
//     name: "Node.js",
//     iconClass: "fa-node-js",
//     iconColor: "text-green-600",
//   },
//   {
//     id: 6,
//     name: "GitHub",
//     iconClass: "fa-github",
//     iconColor: "text-gray-800",
//   },
// ];
// min-w-screen-md max-w-screen-sm min-h-screen
const skills = [
  "html",
  "css",
  "javascript",
  "cloudinary",
  "firebase",
  "appwrite",
  "mongodb",
  "express.js",
  "ejs",
  "bootstrap",
  "tailwind",
  "render",
  "vercel",
];
const tools = [
  {
    name: "MongoDB",
    path: "/public/assets/mongodb.svg",
  },
  {
    name: "Express",
    path: "/public/assets/express.svg",
  },
  {
    name: "React",
    path: "/public/assets/react.svg",
  },
  {
    name: "Node",
    path: "/public/assets/node.svg",
  },
];

const About = () => {
  return (
    <div className="max-w-screen-lg max-h-screen mt-12 " id="about">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:justify-around">
        <div className="my-auto w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-semibold pb-6">About me</h2>
          <div className="pb-6">
            I help business owners and busy web developers to design & develop
            creative websites that fit their vision and attract visitors to stay
            forever. My goal is to contribute in something that has a value for
            technological world
          </div>
          <h2 className="text-2xl font-semibold my-2">Tools I know</h2>
          <div className="flex flex-wrap justify-start gap-5">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-600 rounded-full shadow-md p-2 hover:scale-105 transition-transform duration-300">
                  <img src={`${tool.path}`} alt="tool" />
                </div>
                <p
                  className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 text-sm text-gray-500 bg-white border-gray-600 rounded-lg shadow-sm top-16"
                  role="tooltip"
                >
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
          <img
            src="/public/assets/output-onlinepngtools.png"
            alt="ic"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="float-start flex flex-wrap gap-3 max-w-xl md:max-w-lg   mx-auto px-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-1"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default About;
