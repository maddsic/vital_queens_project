import React from "react";
import { motion } from "framer-motion";
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
         transition={{ delay: 0.1, duration: 1, type: "spring" }}
         className="flex flex-1 gap-2"
      >
         <h1 className="cursor-pointer text-red-700">
            <span className="text-3xl">Q</span>ueen{" "}
            <span className="text-3xl">V</span>ital
         </h1>
      </motion.div>
   );
};

export default Logo;
