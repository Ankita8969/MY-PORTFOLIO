import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/photo.jpg"; // Put your photo in src/assets/
function Hero() {
  return (
  <section className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10">
      
      {/* Left: Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-2xl text-blue-500 font-extrabold">Hello I'm</h1>
        <h4 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
        <span className="text-4xl text-amber-300">ANKITA SINGH</span>
        </h4>
        <p className="text-4xl text-blue-400 font-bold p-2.5">
          FULLSTACK DEVELOPER
        </p>

        {/* Highlights */}
        <ul className="mb-6 space-y-2 list-disc list-inside text-gray-700">
          <li>BUILDING WEBSITE USING HTML, CSS , REACT AND JAVASCRIPT</li>
          <li>KNOWLEDGE OF TAILWIND CSS AND LAIBRARY LIKE DAISY UI</li>
          <li>I BUILD A USER-FRIENDLY AND CLEAN UI</li>
          <li>ALWAYS CURIOUS TO LEARN NEW TECHNOLOGIES</li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
         
          <Link
            to="/contact"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right: Photo Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
          <img
            src={photo}
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div> 
       </div>

    </section>
  )
}

export default Hero;