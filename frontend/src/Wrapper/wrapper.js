import React from "react";

const wrapper = (Component, classNames) =>
   function HOC() {
      return (
         <div className={`w-[100%] min-h-[70vh] ${classNames}`}>
            <div class="flex-1 w-[100%] flex-col py-[4rem] px-[2rem]">
               <Component />
            </div>
         </div>
      );
   };

export default wrapper;
