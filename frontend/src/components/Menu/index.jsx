import React, { useEffect, useState } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";

const Menu = () => {
   const [menu, setMenu] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      getMenuData();
   }, []);

   //  Getting data from backend Sanity
   const getMenuData = async () => {
      const query = '*[_type == "menu"]';

      try {
         setLoading(true);
         await client.fetch(query).then(response => {
            setMenu(response);
            console.log(response);
            setLoading(false);
         });
      } catch (error) {
         console.log("Whoops something went wrong", error);
      }
   };
   return (
      <section className="menu bg-dark text-white   mt-32 font-blink" id="menu">
         <div className=" mx-auto ">
            <div className="grid lg:grid-cols-2">
               <div className="py-6 px-6 sm:px-14 md:px-0 lg:px-4 md:max-w-[700px] lg:w-[400px] mx-auto">
                  {menu.map((menu, menuIndex) => (
                     <>
                        <h2 className="menu__title font-dancing text-red-600  mt-20">
                           {menu.name}
                        </h2>
                        <h1 className="font-bold text-3xl text-white mt-4">
                           {menu.description}
                        </h1>
                        <div className="grid lg:grid-cols-2 gap-10 mt-8">
                           <div>
                              {menu.menus.map((menu, menusIndex) => (
                                 <motion.li
                                    whileHover={{
                                       scale: 1.3,
                                       originX: 0,
                                       color: "#a6ba61",
                                    }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 300,
                                    }}
                                    className="leading-loose list-none cursor-pointer"
                                 >
                                    {menu}
                                 </motion.li>
                              ))}
                           </div>
                           <div>
                              {menu.menus.map((menu, menusIndex) => (
                                 <motion.li
                                    whileHover={{
                                       scale: 1.3,
                                       originX: 0,
                                       color: "#a6ba61",
                                    }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 300,
                                    }}
                                    className="leading-loose list-none"
                                 >
                                    {menu}
                                 </motion.li>
                              ))}
                           </div>
                        </div>
                     </>
                  ))}
                  <div className="flex gap-4 items-center py-5 mt-3 text-white">
                     <div className="h-10 w-1 bg-white"></div>
                     <motion.p
                        whileHover={{
                           scale: 1.2,
                           transition: { duration: 1 },
                           color: "#a6ba61",
                        }}
                        className="text[15px] font-semibold cursor-pointer"
                     >
                        What's on the Menu
                     </motion.p>
                  </div>
               </div>
               <div className="menu__img"></div>
            </div>
         </div>
      </section>
   );
};

export default Menu;
