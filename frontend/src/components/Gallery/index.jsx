import React from "react";
import { items } from "../../constants/items";

const Gallery = () => {
  return (
    <section className="gallery-section mt-8 pt-8" id="gallery">
      <div className="main__content pb-8">
        <div>
          <h1 className="font-semibold text-4xl  text-center mt-10 text-red-600 my-2 py-1">
            Our Gallery
          </h1>
          <p className="mt-2 text-gray-600 text-center ">
            We have the best collections
          </p>
        </div>
        <div className="flex gap-8 justify-center flex-wrap mt-9 py-10">
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
