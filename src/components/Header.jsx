import logo from "../assets/logo.png"; //importing logo from assets
import Navbar from "./Navbar"; //importing Navbar component

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  w-full items-center justify-between h-[6rem] bg-primary">
        <img src={logo} className="ml-20 mt-4 h-40 w-40" />

        <Navbar />
      </div>
    </>
  );
};

export default Header;
