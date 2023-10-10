import React from "react";
import dinning from "../../assets/images/section-svgs/dinner.svg";
import takeAway from "../../assets/images/section-svgs/take-away.svg";
import delivery from "../../assets/images/section-svgs/delivery.svg";

const Services = () => {
  return (
    <section className="services-container  py-16 mt-10">
      <div className="flex gap-10 justify-center items-center">
        <div className="flex flex-col items-center">
          <img className="h-24" src={dinning} alt="dinner" />
          <h1 className="pt-2 mt-2 font-extrabold text-xl">Dine in</h1>
          <p className="text-center text-gray-500 my-2 text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, velit,
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24" src={takeAway} alt="takeAway" />
          <h1 className="pt-2 mt-2 font-extrabold text-xl">Take Away</h1>
          <p className="text-center text-gray-500 my-2 text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, velit,
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24" src={delivery} alt="delivery" />
          <h1 className="pt-2 mt-2 font-extrabold text-xl">Home Delivery</h1>
          <p className="text-center text-gray-500 my-2 text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, velit,
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
