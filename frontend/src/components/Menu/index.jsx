import React from "react";

const Menu = () => {
  return (
    <section className="menu bg-dark text-white   mt-32 font-blink" id="menu">
      <div className=" mx-auto ">
        <div className="grid lg:grid-cols-2">
          <div className="py-6 px-6 sm:px-14 md:px-0 lg:px-4 md:max-w-[700px] lg:w-[400px] mx-auto">
            <h2 className="menu__title font-dancing text-red-600  mt-20">
              Restaurant
            </h2>
            <h1 className="font-bold text-3xl text-white mt-4">Menu</h1>
            <div className="grid lg:grid-cols-2 gap-10 mt-8">
              <div>
                <p className="leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur repellendus amet voluptate aliquid? Consequuntur
                  maxime voluptas inventore illum dolorem, libero harum debitis
                  doloribus minus culpa! Aliquid eum optio quibusdam tempora.
                </p>
              </div>
              <div>
                <p className="leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur repellendus amet voluptate aliquid? Consequuntur
                  maxime voluptas inventore illum dolorem, libero harum debitis
                  doloribus minus culpa! Aliquid eum optio quibusdam tempora.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center py-5 mt-3 text-white">
              <div className="h-10 w-1 bg-white"></div>
              <p className="text[15px] font-semibold">What's on the Menu</p>
            </div>
          </div>
          <div className="menu__img"></div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
