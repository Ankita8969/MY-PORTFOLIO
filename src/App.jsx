import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./FILES/About";
import Project from "./FILES/Project";
import Contact from "./FILES/Contact";

import Footer from "./FILES/Footer";
import Hero from "./FILES/Hero";
import Nav from "./FILES/Nav";


function App() {
  return (
    <Router>
     <Nav/>
        

    
          <Routes>
           <Route path="/" element={<Hero/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/project" element={<Project/>}/>
           <Route path="/contact" element={<Contact/>}/>
          </Routes>
        

        <Footer/>
      
    </Router>
  );
}

export default App;