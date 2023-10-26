import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { client, urlFor } from "../../client";

const Dishes = () => {
   const [dish, setDish] = useState([]);
   const [loading, setLoading] = useState(false);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.09 });
   const mainControls = useAnimation();

   const checkIsInView = () => {
      console.log("hihihihihi");
      if (isInView) {
         mainControls.start("visible");
      }
   };

   useEffect(() => {
      checkIsInView();
   }, [isInView]);

   useEffect(() => {
      getDishData();
   }, []);

   //  Getting data from backend Sanity
   const getDishData = async () => {
      const query = '*[_type == "dish"]';

      try {
         setLoading(true);
         await client.fetch(query).then(response => {
            setDish(response);
            setLoading(false);
         });
      } catch (error) {
         console.log("Whoops something went wrong", error);
      }
   };

   const dishVariants = {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <section ref={ref} className="dishes-container">
         <div className="mt-14">
            <h1 className="font-semibold font-dancing text-4xl  text-center uppercase text-red-600 py-1">
               Our Dishes{" "}
            </h1>
            <div className="dish__content pb-16  flex justify-center flex-wrap gap-4 xs:gap-5 sm:gap-7 w-full pt-10 mt-14">
               {dish.map(({ imgUrl, name, price, description }, dishIndex) => (
                  <motion.div
                     variants={dishVariants}
                     initial="hidden"
                     animate={mainControls}
                     transition={{
                        duration: 0.5,
                        delay: dishIndex * 0.3,
                        stiffness: 200,
                     }}
                     key={dishIndex}
                     className="w-full xs:w-[250px] sm:w-[260px] shadow-lg relative top-0 mt-5 rounded-md cursor-pointer"
                  >
                     <img
                        src={urlFor(imgUrl)}
                        alt={name}
                        className="xs:h-[210px] sm:h-52 w-full object-cover rounded-t-md"
                     />
                     <div className="price rounded-br-full  rounded-tl-md border-b-[7px] border-red-900 absolute top-0 h-12 w-32 flex items-center justify-center text-center bg-red-600">
                        <p className=" text-white text-lg ">
                           <span className="font-bold">&#163;</span>
                           {price}
                        </p>
                     </div>
                     <div className="p-3 bg-white">
                        <h1 className="text-center mb-2 font-bold text-xl">
                           {name}
                        </h1>
                        <p className="text-gray-500 text-sm p-2">
                           {description}
                        </p>

                        <div className="py-2 mt-2 flex justify-center">
                           <button className="px-7 py-2 bg-red-600 text-white font-serif rounded-lg">
                              Order now
                           </button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Dishes;
