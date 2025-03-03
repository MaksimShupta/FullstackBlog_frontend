import { MdOutlineMail } from "react-icons/md"; //  import MdOutlineMail from react-icons/md
import { GiCoffeeCup } from "react-icons/gi"; //import GiCoffeeCup from react-icons/gi
import { GrMagic } from "react-icons/gr"; //import GrMagic from react-icons/gr
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
        <div className="flex flex-row items-start sm:items-end sm:justify-end text-white mt-10 sm:mt-0">
          <p className="mr-4 ">Get in touch:</p>
          <div className="flex flex-row gap-3  ">
            <MdOutlineMail />
            <GrMagic />
          </div>
        </div>
        {/* end of right side */}
      </div>
    </footer>
  );
};

export default Footer;
