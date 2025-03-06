// import logo from "../assets/logo.png"; //importing logo from assets
import logo from "../assets/Fiction-Addiction-logo-vertical-light.svg"; //importing new logo from assets
import { useState } from "react"; //import useState from react
import { FaUser } from "react-icons/fa"; //importing FaUser  from react icon
import { FaEnvelope } from "react-icons/fa"; //importing  FaEnveloper from react icon
import { FaLock } from "react-icons/fa"; //importing FaLock from react icon
import { Link } from "react-router"; //importing Link from react-router

const RegisterPage = () => {
    const [name, setName] = useState(""); //useState for name
    const [email, setEmail] = useState(""); //useState for email
    const [password, setPassword] = useState(""); //useState for password
    const [confirmPassword, setConfirmPassword] = useState(""); //useState for confirm password

    //handle registration
    const handleRegister = (e) => {
        e.preventDefault(); //prevent default submission
        if (password !== confirmPassword) {
            alert("Passwords do not match!"); // alert if password are not the same
            return;
        }
        console.log("registerer:", name, email, password); //console the inputs
    };
    return (
        <div className="flex flex-col justify-start items-center mt-12 min-h-screen bg-accent">
            <img src={logo} className="w-[12rem] h-[12rem]" />
            <div className="bg-primary p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-accent mb-6">Register</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaUser className="text-primary" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full pl-2 bg-transparent outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaEnvelope className="text-primary" />
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

                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full pl-2 bg-transparent outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent2 text-primary font-bold py-2 px-4 rounded-lg"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm mt-2 text-accent">
                        Already have an account?
                        <Link to="/login" className="text-accent2 ml-2 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
