import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="block-container w-14 h-12 mt-3">
          <div className="btn-back rounded-lg" />
          <div className="btn-front rounded-xl flex justify-center items-center">
            <h1 className="blue-gradient_text drop-shadow text-3xl font-bold flex justify-center ">
              AM
            </h1>
          </div>
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
