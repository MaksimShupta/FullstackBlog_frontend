import { FaHandPeace } from "react-icons/fa"; //import FaHandPeace from react-icons/fa
import { GiCoffeeCup } from "react-icons/gi"; //import GiCoffeeCup from react-icons/gi
import { GrMagic } from "react-icons/gr"; //import GrMagic from react-icons/gr
const Footer = () => {
  return (
    <footer className=" p-10 bg-primary w-full">
      <div className="container flex flex-col sm:flex-row mx-auto justify-between">
        {/* left side */}
        <div className="">
          <h3 className=" text-white text-2xl mb-3">Fiction Addiction</h3>
          <p className="text-white text-xl font-light">
            Fiction addiction is an irresistible escape into stories, where
            reality fades and imagination takes over.
          </p>

          <p className="text-sm font-light mt-10 text-white">
            © {new Date().getFullYear()} Fiction Addiction - No regrets,just
            entries.{" "}
          </p>
        </div>
        {/* end of left side */}

        {/* right side */}
        <div className="flex flex-col items-start sm:items-end sm:justify-end text-white mt-10 sm:mt-0">
          <div className="flex flex-row gap-10  ">
            <FaHandPeace />
            <GiCoffeeCup />
            <GrMagic />
          </div>
          <p className="text-sm font-light mt-10 text-white text-right">
            Powered by questionable life choices, caffeine & magic.
          </p>
        </div>
        {/* end of right side */}
      </div>
    </footer>
  );
};

export default Footer;
