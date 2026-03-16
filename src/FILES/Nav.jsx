import { useState } from "react";
import { Link } from "react-router-dom";

 function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg font-bold "> My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
         <li><Link to="/">Home</Link></li>                                        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Button */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li><Link to="/">Home</Link></li>                                        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
export default Nav;