import React from "react";

const projects = [
  {
    title: "COLOUR GENRATOR",
    description:"A COLOUR GENRATOR BUILD USING HTML ,CSS, AND JAVASCRIPT",
    link: "https://github.com/Ankita8969/CODE.COLLECTION/blob/main/INDEX.HTML",
    image : "https://cdn.sanity.io/images/599r6htc/regionalized/6e108c6e21c875f750b484fd90e2e26e6e597297-1320x743.png?w=1320&h=743&q=75&fit=max&auto=format"
  },
   {
    title: "DIGITAL CLOCK",
    description: "DIGITAL CLOCK USING HTML CSS AND JAVASCRIPT.",
    link: "https://github.com/Ankita8969/CODE.COLLECTION/blob/main/index.html",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2hEtT5j2i9obDzJG4DMqrcuFxTImj1ogEw&s" // replace with your image
  },
  {
    title: "MUSHROOM PROJECT",
    description: "MUSHROOM SHOPPING WEBSITE BUILD WITH TAILWIND CSS..",
    link: "https://github.com/Ankita8969/mushroom-project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxe1XA3OtaHZn2A6smAjvqMWiJJJKi4DxKA&s",
  },
  {
    title: "MY PORTFOLIO",
    description: "BUILD PORFOLIO IN REACT USING FRAMEWORKS.",
    link: "https://github.com/Ankita8969/MY-PORTFOLIO",
    image:  "data:image/png;base64,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",
    },
];

function Project() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-black">
        PROJECTS
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

export default Project;
