import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { images } from "../../constants";
import imagesSlide from "../../constants/data";
import { motion } from "framer-motion";
import "./hero.css";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
   const [currentState, setCurrentState] = useState(0);

   useEffect(() => {
      timer();
   }, [currentState]);

   const bgImageStyle = {
      backgroundImage: `url(${imagesSlide[currentState].url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      maxWidth: "100%",
   };

   const timer = () => {
      const time = setTimeout(() => {
         if (currentState === 3) {
            setCurrentState(0);
         } else {
            setCurrentState(currentState + 1);
         }
      }, 10000);
      return () => clearTimeout(time);
   };

   const goToNext = currentState => setCurrentState(currentState);
   return (
    <section className="w-full bg-black h-screen text-white px-16 ">
      {/* <div className="flex justify-center items-center h-full"> */}
      <div className="mt-20">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
                  {imagesSlide[currentState].body}
               </motion.p>
            </div>

            <div className="carousal flex items-center justify-center">
               {imagesSlide.map((image, currentState) => (
                  <span
                     key={currentState}
                     onClick={() => goToNext(currentState)}
                     className="hidden hover:bg-red-400 transition-all lg:block lg:w-[50px] lg:h-[10px] bg-gray-500 ml-[10px] rounded-md mt-8 cursor-pointer shadow-lg"
                  />
               ))}
            </div>
         </motion.div>
         {/* <Container className="bg-gray-500 w-full h-screen"></Container> */}
      </div>
   );
};

export default Hero;
