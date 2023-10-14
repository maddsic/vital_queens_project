import React, { useState } from "react";
// import NavMenus from "../NavMenus/NavMenus";
// import Navbar from "../Navbar/Navbar";
// import Hero from "../Hero/Hero";
import { MdMenu, MdClose } from "react-icons/md";
import { navLinks } from "../navLists";
import { Link } from "react-router-dom";

const Header = () => {
  //   return <Navbar />;
  // const navLinks = ["home", "about", "menu", "gallery", "contact"];

  const [toggle, setToggle] = useState(false);

  const showModal = () => setToggle((prev) => !prev);

  return (
    <header className="bg-white fixed z-[990] top-0 w-full shadow-md py-3">
      <nav className="max-w-7xl px-4 xs:px-6 sm:px-16 md:px-24 mx-auto py-2">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="cursor-pointer text-red-700">
              <span className="text-3xl leading-3">Q</span>ueen{" "}
              <span className="text-3xl leading-3">V</span>ital
            </h1>
          </div>

          <ul className="hidden lg:flex flex-1 justify-center align-center">
            {navLinks.map(({ name, path }, index) => (
              <li className="my-0 mx-[1rem]" key={index}>
                <Link
                  to={path}
                  className="uppercase text-sm transition-all hover:text-red-900"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="hidden  lg:block text-sm font-semibold px-6 py-2 bg-red-700 shadow-lg hover:bg-red-600 rounded-md text-white cursor-pointer">
            RESERVATIONS
          </button>
          {/* HAMBURGER MENU */}
          <div className="block lg:hidden">
            <MdMenu size={27} className="cursor-pointer" onClick={showModal} />
          </div>
        </div>
      </nav>
      {/* MOBILE NAV MENU*/}
      <div
        className={
          toggle
            ? " mobile__nav__menu lg:hidden block w-full h-screen absolute top-0  z-[999] "
            : "hidden"
        }
      >
        <div className="w-[95%] bg-white h-full ml-auto ">
          <nav className="">
            <div className="flex w-full px-4 xs:px-6 sm:px-16 md:px-24  p py-5 shadow-xl  justify-between">
              <div className="logo">
                <h1 className="cursor-pointer text-red-700">
                  <span className="text-3xl leading-3">Q</span>ueen{" "}
                  <span className="text-3xl leading-3">V</span>ital
                </h1>
              </div>

              {/* HAMBURGER MENU */}
              <div className="block lg:hidden">
                <MdClose
                  size={27}
                  className="cursor-pointer"
                  onClick={showModal}
                />
              </div>
            </div>
            <div className="nav__list px-4 xs:px-6 sm:px-16 md:px-24">
              <ul className="  lg:hidden  mt-16 ">
                {navLinks.map(({ name, path }, index) => (
                  <li className="py-3" key={index}>
                    <Link
                      to={path}
                      className="uppercase text-base font-semibold transition-all hover:text-red-700"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className=" mt-4 lg:block text-sm font-semibold px-6 py-2 bg-red-700 shadow-lg hover:bg-red-600 rounded-md text-white cursor-pointer">
                RESERVATIONS
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
