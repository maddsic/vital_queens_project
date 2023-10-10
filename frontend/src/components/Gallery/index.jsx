import React from "react";
import { items } from "../../constants/items";

const Gallery = () => {
  return (
    <section className="gallery-section mt-12 pt-8">
      <div className="mx-auto max-w-7xl px-16 ">
        <div>
          <h1 className="font-semibold text-4xl  text-center text-red-600 my-2 py-1">
            Our Gallery
          </h1>
          <p className="mt-2 text-gray-600 text-center ">
            We have the best collections
          </p>
        </div>
        <div className="flex gap-8 flex-wrap mt-9 py-10">
          {items.map(({ image, title }, index) => (
            <div key={index} className="w-[250px] ">
              <img
                src={image}
                alt={title}
                className="h-52 object-fill rounded-lg  "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
