import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor } from "../../client";
// const containerVariants = {
//    hidden: {
//       opacity: 0,
//       x: "",
//    },
// };

const Logo = () => {
   return (
      <motion.div
         initial={{ y: -250 }}
         animate={{ y: 4 }}
         transition={{ delay: 2, duration: 2, type: "spring" }}
         className="flex flex-1 gap-2"
      >
         <img src={urlFor(images.vitallogo)} alt="Site Logo" />
      </motion.div>
   );
};

export default Logo;
