import { NavLink } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition duration-200";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-white/20 shadow-[0_2px_15px_rgba(0,0,0,0.5)] bg-gradient-to-br from-gray-900 via-gray-950 to-black/90">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          <Sparkles size={26} className="text-blue-400 animate-pulse" />
          CodeSense AI
        </NavLink>

        {/* Desktop Links */}
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

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60 py-4" : "max-h-0"
        } bg-black/90 px-6 border-t border-white/10`}
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
    </header>
  );
};

export default Navbar;
