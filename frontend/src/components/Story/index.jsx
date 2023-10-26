import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// import whyUs from "../../assets/images/s2.png";
import { client, urlFor } from "../../client";
const Story = () => {
   const [abouts, setAbout] = useState([]);
   const [loading, setLoading] = useState(false);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const mainControls = useAnimation();
   const slideControls = useAnimation();

   const checkIsInView = () => {
      // console.log("Is In View");
      if (isInView) {
         mainControls.start("visible");
         slideControls.start("visible");
      }
   };

   useEffect(() => {
      checkIsInView();
   }, [isInView]);

   useEffect(() => {
      getAboutData();
   }, []);

   //  Getting data from backend Sanity
   const getAboutData = async () => {
      const query = '*[_type == "about"]';

      try {
         setLoading(true);
         await client.fetch(query).then(response => {
            setAbout(response);
            console.log(response);
            setLoading(false);
         });
      } catch (error) {
         console.log("Whoops something went wrong", +error);
      }
   };
   return (
      <section
         ref={ref}
         className="story-container  mb-20 py-8 relative overflow-hidden"
         id="story"
      >
         <motion.div
            variants={{
               hidden: { opacity: 0, y: 75 },
               visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid lg:grid-cols-2 gap-6"
         >
            {abouts.map((item, itemIndex) => (
               <div
                  className="flex flex-col uppercase items-center"
                  key={itemIndex}
               >
                  <h1 className="font-semibold text-3xl sm:text-4xl  mt-2 text-red-600">
                     {item.name}
                  </h1>
                  <p className="py-12 text-[15px] sm:text-base text-gray-500 mt-4">
                     {item.description}
                  </p>

                  <ul className="grid w-full gap-5 grid-cols-2 text-gray-500">
                     {item.service.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                     ))}
                  </ul>
               </div>
            ))}
            <div className="w-full mt-8 lg:mt-0">
               {abouts.map((image, imageIndex) => (
                  <img
                     key={imageIndex}
                     src={urlFor(image.imgUrl)}
                     alt="story-img"
                     className="rounded-lg h-full w-full"
                  />
               ))}
            </div>
         </motion.div>
         <motion.div
            variants={{
               hidden: { right: 0 },
               visible: { right: "100%" },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="absolute top-4 bottom-4 left-0 right-0 bg-red-700"
         ></motion.div>
      </section>
   );
};

export default Story;
