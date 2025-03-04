import { MdOutlineMail } from "react-icons/md"; //  import MdOutlineMail from react-icons/md
import { FaInstagram } from "react-icons/fa"; // import FaInstagram from react-icons/fa
import { SlSocialFacebook } from "react-icons/sl"; // import SlSocialFacebook from react-icons/sl
import { Link } from "react-router"; //importing Link from react-router
const Footer = () => {
  return (
    <footer className="flex  p-10 bg-primary w-full">
      <div className="container flex flex-col sm:flex-row mx-auto justify-between">
        {/* left side */}
        <div className="">
          <p className="text-lg font-light mt-5 text-white">
            {new Date().getFullYear()} My Fiction Addiction. All right reserved.
          </p>
        </div>
        {/* end of left side */}

        {/* right side */}
        <div className="flex flex-row text-2xl items-start sm:items-end sm:justify-end text-white sm:mt-0 ">
          <p className="mr-3  text-lg  sm:mb-2 sm:mt-[1.2rem]">Get in touch:</p>
          <div className="flex flex-row  gap-2 mb-[0.4rem] ">
            <Link to="https://mail.google.com/mail/">
              <MdOutlineMail size={30}  />
            </Link>
            <Link to="https://www.instagram.com/" >
              <FaInstagram size={28} />
            </Link>
            <Link to="https://www.facebook.com/" >
              <SlSocialFacebook size={25} />
            </Link>
          </div>
        </div>
        {/* end of right side */}
      </div>
    </footer>
  );
};

export default Footer;
