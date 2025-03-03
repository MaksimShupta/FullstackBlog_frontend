import { MdOutlineMail } from "react-icons/md"; //  import MdOutlineMail from react-icons/md
import { FaInstagram } from "react-icons/fa"; // import FaInstagram from react-icons/fa
import { SlSocialFacebook } from "react-icons/sl"; // import SlSocialFacebook from react-icons/sl
import { Link } from "react-router"; //importing Link from react-router
const Footer = () => {
  return (
    <footer className=" p-10 bg-primary w-full">
      <div className="container flex flex-col sm:flex-row mx-auto justify-between">
        {/* left side */}
        <div className="">
          <p className="text-lg font-light mt-5 text-white">
            {new Date().getFullYear()} My Fiction Addiction. All right reserved.
          </p>
        </div>
        {/* end of left side */}

        {/* right side */}
        <div className="flex flex-row text-2xl  mt-5 items-start sm:items-end sm:justify-end text-white sm:mt-0">
          <p className="mr-4 sm:mb-2">Get in touch:</p>
          <div className="flex flex-row  gap-2   ">
            <Link to="https://mail.google.com/mail/">
              <MdOutlineMail size={50}/>
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram size={50} />
            </Link>
            <Link to="https://www.facebook.com/" >
              <SlSocialFacebook size={50} />
            </Link>
          </div>
        </div>
        {/* end of right side */}
      </div>
    </footer>
  );
};

export default Footer;
