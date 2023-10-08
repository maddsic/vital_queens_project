import React from "react";
import { images } from "../../constants";
import wrapper from "../../Wrapper/wrapper";
import { motion } from "framer-motion";

const About = () => {
   return (
      <div className="py-[5%]">
         <div className="w-[60%] mx-auto ">
            <div className="w-full p-[4rem] flex">
               <div className="flex-1">
                  <h1>I am coming soon!</h1>
               </div>

               {/* ASIDE 2 BEGINS */}
               <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{
                     delay: 1.5,
                     duration: 1.5,
                     ease: "easeOut",
                     type: "spring",
                  }}
                  className="flex-1"
               >
                  <div className="w-[full] flex-col justify-between items-start">
                     <div className="flex items-center gap-2 ">
                        <div className="w-[28%] h-[8px] mt-5 bg-red-700 rounded-md" />
                        <p className="font-serif text-sm header__font text-green-700">
                           Welcome at{" "}
                        </p>
                        <div className="w-[28%] h-[8px] mt-5 bg-red-700 rounded-md" />
                     </div>
                     <p className="font-mono uppercase text-2xl text-center sub__header-font pl-10 mt-5">
                        <span className="">
                           <span className=" text-red-500">v</span>ital
                        </span>{" "}
                        <span className=" text-yellow-700">Q</span>ueen's
                        Restaurant
                     </p>

                     <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        transition={{
                           delay: 3.5,
                           duration: 1.5,
                           ease: "easeOut",
                           type: "spring",
                        }}
                        className="content py-10"
                     >
                        <p className="text-sm font-serif">
                           Meet Chef Chantel, a passionate vegan culinary artist
                           who's transforming the food scene one plant-based
                           dish at a time! 🌱👩‍🍳 With creativity and dedication,
                           Chantel crafts mouthwatering vegan masterpieces that
                           not only tantalize your taste buds but also nourish
                           your body and the planet. that vegan cuisine can be
                           both wholesome and utterly indulgent.
                           <br /> <br />
                           From vibrant salads bursting with fresh, locally
                           sourced veggies to innovative plant-based versions of
                           your favorite comfort foods, she's redefining what it
                           means to eat sustainably and deliciously. Chantel's
                           commitment to ethical eating shines through in every
                           dish she creates, proving Whether you're a seasoned
                           vegan or just curious about plant-based options, Chef
                           Chantel is your guide to a world of flavor and
                           compassion.
                           <br /> <br />
                           Follow her culinary adventures for a taste of the
                           future, one delectable plate at a time! 🌱🍽️
                           #VeganChefMagic
                        </p>
                     </motion.div>

                     <motion.div>
                        <div className="flex gap-4 items-center">
                           <div
                              whileHover={{
                                 scale: 1.2,
                                 transition: { duration: 1 },
                              }}
                              className="w-[2px] h-[50px] bg-black"
                           />
                           <motion.span
                              whileHover={{
                                 scale: 1.2,
                                 transition: { duration: 1 },
                                 color: "red",
                              }}
                              className="text-sm"
                           >
                              ABOUT US
                           </motion.span>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

// export default About;
export default wrapper(About, "bg-white");
