import React from "react";
import Header from "../../components/Header/Header";
import { images } from "../../constants/galleryImages";
import Subscription from "../../components/Subscription";
import Footer from "../../components/Footer";

const Gallery = () => {
  return (
    <>
      <Header />
      <section className="gallery__container mt-16 pt-10">
        <div className="main__content pb-8">
          <div>
            <h1 className="font-semibold text-4xl uppercase text-center mt-10 text-red-600 my-2 py-1">
              Our Gallery
            </h1>
            <p className="mt-2 text-gray-600 text-center ">
              We have the best collections
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mt-12">
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt="gallery-img" />
              </div>
            ))}
          </div>
        </div>
        <Subscription />
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
