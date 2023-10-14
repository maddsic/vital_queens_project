import React from "react";
import NavMenus from "../NavMenus/NavMenus";
// import Navbar from "../Navbar/Navbar";
// import Hero from "../Hero/Hero";

const Header = () => {
  //   return <Navbar />;
  return (
    <header className="bg-white fixed z-[999] top-0 w-full shadow-md py-3">
      <nav className="max-w-7xl mx-auto px-16 py-2">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="cursor-pointer text-red-700">
              <span className="text-3xl">Q</span>ueen{" "}
              <span className="text-3xl">V</span>ital
            </h1>
          </div>

              {/* HAMBURGER MENU */}
              <div className="block lg:hidden">
                <MdClose size={27} />
              </div>
            </div>
            <div className="nav__items px-8">
              <ul className="  lg:hidden flex flex-col mt-16  justify-center align-center">
                {navLinks.map((navlink, index) => (
                  <li className="py-2" key={index}>
                    <a
                      href={`#${navlink}`}
                      className="uppercase text-sm transition-all hover:text-red-900"
                    >
                      {navlink}
                    </a>
                  </li>
                ))}
              </ul>
              <button className=" mt-4 lg:block text-sm font-semibold px-6 py-2 bg-red-700 shadow-lg hover:bg-red-600 rounded-md text-white cursor-pointer">
                RESERVATIONS
              </button>
            </div>
          </nav>
    </header>
  );
};

export default Header;
