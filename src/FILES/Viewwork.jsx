import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A web app built with HTML, CSS, and JavaScript. Users can do XYZ.",
    link: "https://yourusername.github.io/project-one/",
      Image : "" // replace with your image
  },
  {
    title: "Project Two",
    description: "Another project using HTML, CSS, JS. It helps users do ABC.",
    link: "https://yourusername.github.io/project-two/",
    image: "https://via.placeholder.com/400x200?text=Project+Two" // replace with your image
  }
];

function Viewwork() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-black">
        Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Viewwork;