import { NavLink } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 text-white text-2xl font-semibold">
          <Sparkles size={24} className="text-blue-400" />
          <NavLink to="/" className="hover:text-blue-400 transition">
            CodeSense AI
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-lg">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/codesense-ai" className={navLinkStyle}>
            CodeSense AI
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About Us
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-60 py-4" : "max-h-0"
        } bg-gray-950 px-6`}
      >
        <div className="flex flex-col gap-4 text-lg">
          <NavLink
            to="/"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/codesense-ai"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            CodeSense AI
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
