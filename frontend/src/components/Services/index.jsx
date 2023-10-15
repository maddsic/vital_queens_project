import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";

const Services = () => {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(false);

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
      <section className="services-container  py-16 mt-10" id="service">
         <div className="grid md:grid-cols-3  gap-10 justify-center items-center">
            {services.map((service, serviceIndex) => (
               <motion.div
                  // className="box"
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
         </div>
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
