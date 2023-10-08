import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavMenus from "../NavMenus/NavMenus";
import Hero from "../Hero/Hero";

const Navbar = () => {
   return (
      <div className="w-full bg-none z-10 shadow-sm">
         <div className="py-4 border-b-[1px]">
            <Container>
               <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                  <Logo />
                  <NavMenus />
               </div>
            </Container>
         </div>
         <Hero />
      </div>
   );
};

export default Navbar;
