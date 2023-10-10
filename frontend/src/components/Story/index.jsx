import React from "react";
import whyUs from "../../assets/images/s2.png";
const Story = () => {
  return (
    <section className="story-container mt-14 mb-20 py-8">
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-3xl  text-red-600">Our Story</h1>
          <p className="py-12 text-gray-500">
            We combine taste and quality to serve you a delightful array of
            mouthwatering dishes, crafted with passion and made to perfection.
          </p>

          <ul className="flex flex-wrap gap-4  text-gray-500">
            <li className="w-[43%]">Fresh Food</li>
            <li className="w-[43%]">Prmium Services</li>
            <li className="w-[43%]">Lorem Ipsum Dolor</li>
            <li className="w-[43%]">Dining</li>
            <li className="w-[43%]">Catering</li>
            <li className="w-[43%]">Special Events Booking</li>
            <li className="w-[43%]">Home Delivery</li>
            <li className="w-[43%]">Lorem Ispsum</li>
            <li className="w-[43%]">Wedding Services</li>
            <li className="w-[43%]">Delightful Food</li>
          </ul>
        </div>
        <div>
          <img src={whyUs} alt="story-img" />
        </div>
      </div>
    </section>
  );
};

export default Story;
