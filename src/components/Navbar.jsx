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
    <nav className="w-full fixed bg-gray-800 shadow-md py-4 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 text-white text-2xl font-semibold">
          <Sparkles size={24} className="text-blue-400" />
          <NavLink to="/">CodeSense AI</NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/codesense-ai" className={navLinkStyle}>CodeSense AI</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pt-4 flex flex-col gap-4 text-lg bg-gray-900">
          <NavLink to="/" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/codesense-ai" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>CodeSense AI</NavLink>
          <NavLink to="/about" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
