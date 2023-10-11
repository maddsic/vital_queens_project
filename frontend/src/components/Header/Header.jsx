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
          <NavMenus />
        </div>
      </nav>
    </header>
  );
};

export default Header;
