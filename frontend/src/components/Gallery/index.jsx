import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { client, urlFor } from "../../client";

const Gallery = () => {
   const [galary, setGalary] = useState([]);
   const [loading, setLoading] = useState(false);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.09 });
   const mainControls = useAnimation();

   const checkIsInView = () => {
      if (isInView) {
         console.log("galary Is In View");
         mainControls.start("visible");
      }
   };

   useEffect(() => {
      getGalaryData();
   }, []);

   useEffect(() => {
      checkIsInView();
   }, [isInView]);
   //  Getting data from backend Sanity
   const getGalaryData = async () => {
      const query = '*[_type == "galary"]';

      try {
         setLoading(true);
         await client.fetch(query).then(response => {
            console.log("Galary data");
            console.log(response[0].imgUrl);
            setGalary(response[0].imgUrl);
            setLoading(false);
         });
      } catch (error) {
         console.log("Whoops something went wrong", error);
      }
   };

   const galaryVariants = {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
   };
   return (
      <section ref={ref} className="gallery-section mt-8 pt-8" id="gallery">
         <div className="main__content pb-8">
            <div>
               <h1 className="font-semibold text-4xl uppercase text-center mt-10 text-red-600 my-2 py-1">
                  Our Gallery
               </h1>
               <p className="mt-2 text-gray-600 text-center ">
                  We have the best collections
               </p>
            </div>
            <div className="flex gap-8 justify-center flex-wrap mt-9 py-10">
               {galary.map((image, galaryIndex) => (
                  <motion.div
                     variants={galaryVariants}
                     initial="hidden"
                     animate={mainControls}
                     transition={{
                        duration: 0.5,
                        delay: galaryIndex * 0.3,
                        // from: 0.5,
                        ease: "easeOut",
                     }}
                     whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.4 },
                     }}
                     key={galaryIndex}
                     className="w-[250px] hover:scale-75"
                  >
                     <img
                        src={urlFor(image)}
                        alt="galary Image"
                        className="h-52 object-cover rounded-lg  "
                     />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Gallery;
