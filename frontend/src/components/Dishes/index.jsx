import React from "react";
import { items } from "../../constants/items";
const index = () => {
  return (
    <section className="dishes-container mt-10 py-8">
      <div className="mx-auto max-w-7xl px-16">
        <h1 className="font-semibold text-4xl  text-center text-red-600 my-2 py-1">
          Our Dishes{" "}
        </h1>
        <div className="grid grid-cols-4 gap-4 w-full  mt-14">
          {items.map(({ id, image, title, price, description }, index) => (
            <div
              key={index}
              className="w-[265px] shadow-lg relative top-0 mt-5 rounded-md"
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-center  rounded-t-md"
              />
              <div className="price rounded-br-full  rounded-tl-md border-b-[7px] border-red-900 absolute top-0 h-12 w-32 flex items-center justify-center text-center bg-red-600">
                <p className=" text-white text-lg "> ${price}</p>
              </div>
              <div className="p-3">
                <h1 className="text-center mb-2 font-bold text-xl">{title}</h1>
                <p className="text-gray-500 text-sm py-2">{description}</p>

                <div className="py-2 mt-2 flex justify-center">
                  <button className="px-7 py-2 bg-red-600 text-white font-serif rounded-lg">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
