import { Link } from "react-router-dom";
import logo from "../../shared/src/assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../shared/src/index.css";

const Navbar = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 sticky h-20 top-0 z-50 bg-white flex items-center justify-between border-b-2 border-gray-100">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="cursor-pointer w-16 sm:w-20" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="flex items-center gap-1">
          Features
          <MdKeyboardArrowDown />
        </Link>
        <Link to="/">Pricing</Link>
        <Link to="/" className="flex items-center gap-1">
          Solutions
          <MdKeyboardArrowDown />
        </Link>
        <Link to="/" className="flex items-center gap-1">
          Resources
          <MdKeyboardArrowDown />
        </Link>
        <Link to="/">Find Professionals</Link>
        <Link to="/" className="flex items-center gap-1">
          Help
          <MdKeyboardArrowDown />
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="text-sm font-medium">Log in</button>
        <button className="bg-[#19525A] text-white px-4 py-2 rounded-md text-sm font-medium">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Navbar;
