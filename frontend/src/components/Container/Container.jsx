import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:px-16 md:px-10 sm:px-2 px-4 max-w-7xl mx-auto ">
      {children}
    </div>
  );
};

export default Container;
