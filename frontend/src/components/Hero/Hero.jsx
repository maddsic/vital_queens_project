import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./hero.css";
import { client, urlFor } from "../../client";
import Slider from "../../constants/data";

const Hero = () => {
   const [imagesSlide, setImagesSlide] = useState([]);
   const [currentState, setCurrentState] = useState(0);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      getHeroData();
   }, []);

   //  Slider Timer Function
   useEffect(() => {
      const time = setTimeout(() => {
         if (currentState === 3) {
            setCurrentState(0);
         } else {
            setCurrentState(prev => prev + 1);
         }
      }, 10000);
      return () => clearTimeout(time);
   }, [currentState]);

   //  Hero background Styles
   const bgImageStyle = {
      backgroundImage: `url(${Slider[currentState].url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      maxWidth: "100%",
   };

   //  Slider Next function!
   const goToNext = currentState => setCurrentState(currentState);

   //  Getting data from backend Sanity
   const getHeroData = async () => {
      const query = '*[_type == "hero"]';

      try {
         setLoading(true);
         await client.fetch(query).then(response => {
            // console.log(response);
            setImagesSlide(response);
         });
      } catch (error) {}
   };

   return (
      <div className="h-screen relative" id="home">
         <motion.div style={bgImageStyle} />
         <div className="transparent_bg w-full h-screen absolute z-30 top-0 left-0"></div>

         <motion.div
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 3.5, type: "spring" }}
            className="description w-full absolute top-0 z-50 flex flex-col justify-center h-full items-center text-blue-100  bg-gradient-to-t from-bg-gray-900 to-red-700"
         >
            <div className="xs:px-6 sm:px-12 md:px-16 lg:px-0 max-w-4xl mt-4">
               <h1 className=" text-white text-3xl md:text-6xl font-bold mb-10">
                  {imagesSlide[currentState]?.headerTitle}
               </h1>
               <motion.p
                  initial={{ y: 250 }}
                  animate={{ y: 4 }}
                  transition={{ delay: 1.5, duration: 1.5, type: "spring" }}
                  className="lg:text-lg"
               >
                  {imagesSlide[currentState]?.headerSubTitle}
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
      </div>
   );
};

export default Hero;
