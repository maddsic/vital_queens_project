import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { client, urlFor } from "../../client";
import SlideAnimate from "../SlideAnimate";

const Services = () => {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(false);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.5 });
   const mainControls = useAnimation();
   const slideControls = useAnimation();

   const checkIsInView = () => {
      if (isInView) {
         console.log("Service Is In View");
         mainControls.start("visible");
         slideControls.start("visible");
      }
   };

   useEffect(() => {
      checkIsInView();
   }, [isInView]);

   useEffect(() => {
      getServicesData();
   }, []);

   //  Getting data from backend Sanity
   const getServicesData = async () => {
      const query = '*[_type == "services"]';

      try {
         setLoading(true);
         await client.fetch(query).then(response => {
            setServices(response);
            // console.log(response);
            setLoading(false);
         });
      } catch (error) {
         console.log("Whoops something went wrong", +error);
      }
   };
   return (
      <section
         ref={ref}
         className="services-container py-16 mt-10 relative overflow-hidden"
         id="service"
      >
         <motion.div
            variants={{
               hidden: { opacity: 0, y: 75 },
               visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-10 justify-center items-center"
         >
            {services.map((service, serviceIndex) => (
               <motion.div
                  // className="box"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     duration: 0.8,
                     delay: 0.5,
                     ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="box flex flex-col items-center"
                  key={serviceIndex}
               >
                  <>
                     <img
                        className="h-24 text-gray-500"
                        src={urlFor(service.imgUrl)}
                        alt="dinner"
                     />
                     <h1 className="pt-2 mt-2 font-extrabold text-xl text-red-600">
                        {service.name}
                     </h1>
                     <p className="text-center text-gray-500 my-2 text-[15px]">
                        {service.description}
                     </p>
                  </>
               </motion.div>
            ))}
         </motion.div>
         {/* <SlideAnimate props={slideControls} /> */}

         <motion.div
            variants={{
               hidden: { left: 0 },
               visible: { left: "100%" },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="absolute top-4 bottom-4 left-0 right-0 bg-red-700"
         ></motion.div>
      </section>
   );
};

export default Services;

// <div className="flex flex-col items-center">
//              <img className="h-24" src={takeAway} alt="takeAway" />
//              <h1 className="pt-2 mt-2 font-extrabold text-xl text-red-600">
//                 Take Away
//              </h1>
//              <p className="text-center text-gray-500 my-2 text-[15px]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Reprehenderit, velit,
//              </p>
//           </div>
//           <div className="flex flex-col items-center">
//              <img className="h-24" src={delivery} alt="delivery" />
//              <h1 className="pt-2 mt-2 font-extrabold text-xl text-red-600">
//                 Home Delivery
//              </h1>
//              <p className="text-center text-gray-500 my-2 text-[15px]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Reprehenderit, velit,
//              </p>
//           </div>
