import React from "react";
import bannerImgOne from "../../assets/images/banner/banner-img.png";
import bannerImgTwo from "../../assets/images/banner/banner.jpg";
import bannerImgThree from "../../assets/images/banner/burger-img.png";

const Banner = () => {
  return (
    <section class="banner-container mt-16 ">
      <div class="max-w-7xl mx-auto  px-16 py-6">
        <div class="flex gap-2 mt-2">
          <div class="banner-One bg-dark relative top-0 bottom-0 right-0 left-0 w-1/2 h-[500px] flex flex-col items-center justify-center">
            <h3 class="text-red-600 text-3xl font-bold">
              Buy 1 Get 1 <span>free</span>
            </h3>
            <h1 class="text-5xl font-extrabold text-white mt-3">
              Best Tastey Burger
            </h1>
            <img src={bannerImgThree} alt="" class="h-52 w-52" />
            <div class="price absolute bottom-11 bg-red-500 w-24 h-10 flex items-center justify-center rounded-full py-3">
              <p class="font-black text-white text-2xl">$60</p>
            </div>
          </div>
          <div class="w-1/2 flex flex-col gap-2">
            <div class="w-full">
              <img
                src={bannerImgTwo}
                alt=""
                class="h-[245px] w-full object-cover"
              />
            </div>
            <div class="w-full bg-orange-500 h-[249px] flex items-center">
              <img src={bannerImgOne} alt="" class="h-[249px]" />
              <div>
                <h2 class="text-5xl font-bold">Fast Delivery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
