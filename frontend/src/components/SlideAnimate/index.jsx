import React, { useEffect, useState, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const SlideAnimate = props => {
   return (
      <motion.div
         variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
         }}
         initial="hidden"
         animate={props}
         transition={{ duration: 0.5, ease: "easeIn" }}
         className="absolute top-4 bottom-4 left-0 right-0 bg-red-700"
      ></motion.div>
   );
};

export default SlideAnimate;
