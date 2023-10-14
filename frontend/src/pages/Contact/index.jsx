import React from "react";
import Header from "../../components/Header/Header";
import Subscription from "../../components/Subscription";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact__container mt-20 pt-10">
        <div className="main__content">
          <h1 className="font-semibold text-4xl uppercase text-center mt-10 text-red-600 my-2 py-1">
            Our Gallery
          </h1>
          <div>
            <div className="max-w-2xl  mx-auto">
              <h2 className="text-2xl text-center mt-8">Send a Message</h2>
              <form action="" className="flex flex-col mt-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="outline-none border border-gray-300 py-3 px-4 mt-3"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none border border-gray-300 py-3 px-4 mt-3"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="outline-none border border-gray-300 py-3 px-4 mt-3"
                />
                <div className="p-2 mt-7 flex justify-center">
                  <button className="py-3 px-8 text-white font-semibol text-lg bg-red-600 w-44">
                    {" "}
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Subscription />
        <Footer />
      </section>
    </>
  );
};

export default Contact;
