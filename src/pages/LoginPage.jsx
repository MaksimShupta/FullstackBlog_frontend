import logo from "../assets/logo.png"; //importing logo from assets
import { useState } from "react"; //import useState from react
import { FaUser, FaLock } from "react-icons/fa"; //import FaUser abd FaLock from react-icons
import { Link } from "react-router"; //importing Link from react-router

const LoginPage = () => {
  const [email, setEmail] = useState(""); //useState from email
  const [password, setPassword] = useState(""); //useState for password

  //handle login
  const handleLogin = (e) => {
    e.preventDefault(); //prevent default submission
    console.log("log in:", email, password); //console the inputs
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-accent">
      <img src={logo}  />
      <div className="bg-primary p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-accent mb-6">
          Log in
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
            <FaUser className="text-primary" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-2 bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
            <FaLock className="text-primary" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-2 bg-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent2 text-primary font-bold py-2 px-4 rounded-lg"
          >
            Log in
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm mt-2 text-accent">
            Don't have an account?
            <Link to="/register" className="text-accent2 ml-2 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
