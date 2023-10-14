import React from "react";
import whyUs from "../../assets/images/s2.png";
const Story = () => {
  return (
    <section className="story-container  mb-20 py-8" id="story">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="flex flex-col uppercase items-center">
          <h1 className="font-semibold text-3xl sm:text-4xl  mt-2 text-red-600">
            Our Story
          </h1>
          <p className="py-12 text-[15px] sm:text-base text-gray-500 mt-4">
            We combine taste and quality to serve you a delightful array of
            mouthwatering dishes, crafted with passion and made to perfection.
          </p>

          <ul className="grid  w-full gap-5 grid-cols-2 text-gray-500">
            <li>Fresh Food</li>
            <li>Prmium Services</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Dining</li>
            <li>Catering</li>
            <li>Special Events Booking</li>
            <li>Home Delivery</li>
            <li>Lorem Ispsum</li>
            <li>Wedding Services</li>
            <li>Delightful Food</li>
          </ul>
        </div>
        <div className="w-full mt-8 lg:mt-0">
          <img
            src={whyUs}
            alt="story-img"
            className="rounded-lg h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
