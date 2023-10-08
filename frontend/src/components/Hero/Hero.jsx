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
      <div className="h-screen relative">
         <motion.div style={bgImageStyle} />
         <div className="transparent_bg w-full h-screen absolute z-[998] top-0 left-0"></div>

         <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 3.5, type: "spring" }}
            className="description w-[300px] md:w-[450px] lg:w-[600px] absolute z-[999] text-blue-100 top-[20%] left-[20%] bg-gradient-to-t from-bg-gray-900 to-red-700"
         >
            <div className="text-center">
               <h1 className="text-lg lg:text-5xl font-semibold mb-10">
                  {imagesSlide[currentState].title}
               </h1>
               <motion.p
                  initial={{ y: 250 }}
                  animate={{ y: 4 }}
                  transition={{ delay: 1.5, duration: 1.5, type: "spring" }}
                  className="lg:text-3xl font-medium"
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
