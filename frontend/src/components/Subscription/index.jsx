import React from "react";

const Subscription = () => {
  return (
    <section className="bg-gray-950 px-6 sm:px-0 mt-24 text-gray-50 py-16 flex  flex-col justify-center items-center">
      <h1 className="subscribe__title pt-3 mt-4">Subscribe to our</h1>
      <h2 className="font-semibold text-3xl py-4">NEWSLETTER</h2>
      <p>
        Subscribe to our newsletter and receive 15% discount from your order.
      </p>
      <form action="" method="post" className="mt-4 flex">
        <input
          type="text"
          className="h-12 sm:w-96 py-2 px-5"
          placeholder="enter your email "
        />
        <button className="bg-red-500 px-5">subscribe</button>
      </form>
    </section>
  );
};

export default Subscription;
