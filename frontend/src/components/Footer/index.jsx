import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 text-[15px] py-12">
      <div className="mx-auto max-w-7xl px-16">
        <div className="grid grid-cols-4 gap-4 py-7">
          <div className="footer__description">
            <p>
              Chef Taylor Bonnyman, working in collaboration with Head Chef
              Marguerite Keogh, offer elegant & playful modern British cooking.
            </p>
          </div>
          <div className="footer_links">
            <ul className="flex flex-col gap-2 ">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">MENU</a>
              </li>
              <li>
                <a href="#">RESERVATION</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="footer__social_links">
            <div>
              <a
                href="#"
                className="border border-red-600 py-2 px-4 text-red-500"
              >
                Online reservation
              </a>
            </div>
            <h4 className="mt-4 text-lg">Follow</h4>
          </div>
          <div className="footer__address">
            <ul>
              <li>+4 1800 555 1234</li>
              <li>BOOKATABLE@RESTAURANT.COM</li>

              <li>49 Featherstone Street LONDON EC1Y 8SY UNITED KINGDOM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
