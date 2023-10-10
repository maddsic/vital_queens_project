import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = ["home", "about", "menu", "gallary", "contact"];

const NavMenus = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`flex items-center gap-20 mr-[2rem]`}>
        <ul className="hidden lg:flex flex-1 justify-center align-center">
          {navLinks.map((navlink, index) => (
            <li className="my-0 mx-[1rem]" key={index}>
              <a
                href={`#${navlink}`}
                className="uppercase text-sm transition-all hover:text-red-900"
              >
                {navlink}
              </a>
            </li>
          ))}
        </ul>

        {/* BOOK EVENT */}
        <motion.button
          initial={{ x: 250 }}
          animate={{ x: 4 }}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          type="button"
          className="hidden lg:block text-sm font-semibold px-6 py-2 bg-red-700 shadow-lg hover:bg-red-600 rounded-md text-white cursor-pointer"
          onClick={() => setToggle(true)}
        >
          RESERVATIONS
        </motion.button>

        {/* HAMBURGER MENU */}
        <div className="flex-1 lg:hidden">
          <HiMenuAlt4 size={30} onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />

              {navLinks.map((navlink, index) => (
                <ul className="" key={index}>
                  <li className="">
                    <a
                      href={`#${navlink}`}
                      className="uppercase transition-all hover:text-red-900"
                      onClick={() => setToggle(false)}
                    >
                      {navlink}
                    </a>
                  </li>
                </ul>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {toggle && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          class="fixed top-50 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenus;
