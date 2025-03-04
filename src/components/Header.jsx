import logo from "../assets/logo.svg"; //importing logo from assets
import { Link } from "react-router"; //importing Link from react-router
import { CiSearch } from "react-icons/ci"; //import react from icons
import { LiaGripLinesVerticalSolid } from "react-icons/lia"; //import react from icons
const Header = () => {
  return (
    <>
      <div className="flex  flex-row  w-full items-center justify-between h-[6rem] bg-primary">
        <img src={logo} className="ml-12 mt-4" />

        <navbar className="flex  text-2xl flex-row gap-2 mr-12 text-accent">
          <CiSearch size={30} />

          <ul>
            <li className="font-extrabold">
              <Link to="/">Home</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="login">Log in</Link>
            </li>
          </ul>
          <LiaGripLinesVerticalSolid size={34} />
          <ul>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </navbar>
      </div>
    </>
  );
};

export default Header;
