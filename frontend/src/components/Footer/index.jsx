import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 text-[15px] py-12">
      <div className="main__content">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-5 md:gap-4 py-7">
          <div className="footer__description">
            <p>
              Chef Taylor Bonnyman, working in collaboration with Head Chef
              Marguerite Keogh, offer elegant & playful modern British cooking.
            </p>
          </div>
          <div className="footer_links">
            <ul className="flex flex-col gap-2 ">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#home">MENU</a>
              </li>
              <li>
                <a href="#home">RESERVATION</a>
              </li>
              <li>
                <a href="#home">SHOP</a>
              </li>
              <li>
                <a href="#home">NEWS</a>
              </li>
              <li>
                <a href="#home">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="footer__social_links">
            <div>
              <a
                href="#home"
                className="border border-red-600 py-2 px-4 text-red-500"
              >
                Online reservation
              </a>
            </div>
            <h4 className="mt-4 text-lg">Follow</h4>
            <ul className="flex mt-3 gap-4">
              <li>
                <a href="#home">
                  <BsFacebook size={28} />
                </a>
              </li>
              <li>
                <a href="#home">
                  <BsInstagram size={28} />
                </a>
              </li>
              <li>
                <a href="#home">
                  <BsTwitter size={28} />
                </a>
              </li>
              <li>
                <a href="#home">
                  <BsLinkedin size={28} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__address">
            <ul className="flex flex-col gap-3">
              <li>+4 1800 555 1234</li>
              <li>BOOKATABLE@RESTAURANT.COM</li>

              <li>49 Featherstone Street LONDON EC1Y 8SY UNITED KINGDOM</li>
            </ul>
          </div>
        </div>

        <p className="text-sm py-2 text-center text-gray-100">
          copyright &copy; All right reserverd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
