import logo from "../assets/logo.svg"; //importing logo from assets
import Navbar from "./Navbar"; //importing Navbar component

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  w-full items-center justify-between h-[6rem] bg-primary">
        <img src={logo} className="ml-12 mt-4" />

        <Navbar />
      </div>
    </>
  );
};

export default Header;
