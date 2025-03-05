import { useState } from "react"; //import use state from react
import { Link } from "react-router"; //importing Link from react-router
import { CiSearch } from "react-icons/ci"; //import react from icons
import { FaTimes } from "react-icons/fa"; // Import close icon
import { LiaGripLinesVerticalSolid } from "react-icons/lia"; //import react from icons

const Navbar = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); //state for isSearchOpen
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(searchText);
    }
    setIsSearchOpen(false); // Close search bar after submission (optional)
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <nav className="flex  text-2xl flex-row gap-2 mr-12 text-accent">
      <div className="hidden lg:flex">
        {!isSearchOpen && (
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full hover:bg-accent2"
          >
            <CiSearch size={30} />
          </button>
        )}
      </div>

      {isSearchOpen && (
        <div className="absolute top-3 w-[22rem] left-[32rem] 2xl:left-[45rem] 2xl:w-[45rem] bg-accent p-2 rounded-lg flex items-center justify-center mt-2">
          <input
            type="text"
            placeholder="Search book by title..."
            value={searchText}
            onChange={handleSearchChange} // Update searchText state
            onKeyDown={handleKeyDown}
            className="w-full p-2 border rounded-lg bg-primary"
          />
          <button onClick={handleSearchSubmit} className="p-2 rounded-full">
            <CiSearch className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full"
          >
            <FaTimes className="w-5 h-5 text-primary" />
          </button>
        </div>
      )}

      <ul>
        <li className="font-extrabold ml-20 md:ml-0">
          <Link to="/">Home</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="login">Log in</Link>
        </li>
      </ul>
      <LiaGripLinesVerticalSolid size={34} />

      {/* <ul>
        <li>
          <Link to="create">Add Article</Link>
        </li>
      </ul>
      <ul> */}
      

      <ul>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
