import { MdMenu } from "react-icons/md";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Subscription from "../../components/Subscription";
import { menuItems } from "../../constants/menu";

const Menu = () => {
  return (
    <>
      <Header />
      <section className="menu__container mt-20 pt-8">
        <div className="main__content">
          <h1 className="font-semibold text-4xl  text-center uppercase text-red-600  py-1">
            Menu
          </h1>

          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="menu__category w-full lg:w-56 relative top-0 ">
              <div className="w-full lg:py-6 px-4 lg:px-7 lg:border lg:border-red-400 h-fit">
                <div className="flex w-full items-center justify-between ">
                  <h3 className="text-2xl lg:text-3xl">Category</h3>
                  <div>
                    <MdMenu size={27} className="block lg:hidden" />
                  </div>
                </div>
                <ul className="hidden lg:block">
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline text-red-600">
                    All
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Burgers
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Pizzas
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Steaks
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Pastas
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Salads
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Deserts
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Drinks
                  </li>
                  <li className="py-3 font-semibold text-lg cursor-pointer hover:underline">
                    Cakes
                  </li>
                </ul>
              </div>
            </div>

            <div className="menu__items flex-1 flex flex-wrap justify-center gap-7">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[90%] xs:w-44 md:w-56 lg:w-60 bg-white shadow-lg mt-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-44 w-full"
                  />
                  <div className="px-2 py-4 ">
                    <h3 className="text-lg text-center uppercase font-semibold my-1">
                      {" "}
                      {item.name}
                    </h3>
                    <p className="py-2 text-[15px] text-center text-gray-600">
                      {item.description}
                    </p>
                    <p className="p-2 text-center text-red-700 text-xl font-semibold">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Subscription />
        <Footer />
      </section>
    </>
  );
};

export default Menu;
