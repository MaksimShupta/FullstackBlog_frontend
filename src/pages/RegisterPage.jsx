// import logo from "../assets/logo.png"; //importing logo from assets
import logo from "../assets/Fiction-Addiction-logo-vertical-light.svg"; //importing new logo from assets
import { useState } from "react"; //import useState from react
import { FaUser } from "react-icons/fa"; //importing FaUser  from react icon
import { FaEnvelope } from "react-icons/fa"; //importing  FaEnveloper from react icon
import { FaLock } from "react-icons/fa"; //importing FaLock from react icon
import { Link, useNavigate } from "react-router"; //importing Link from react-router
import { createUser } from "../services/usersApi";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullname: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //handle registration
    const handleRegister = async (e) => {
        e.preventDefault(); //prevent default submission
        console.log("password:", formData.password, formData.confirmPassword);
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!"); // alert if password are not the same
            return;
        }
        const emptyField = Object.entries(formData).find(([key, value]) => !value);
        if (emptyField) {
            alert(`Please fill in the ${emptyField[0]} field.`);
            return;
        }

        console.log("registered:", formData.fullname, formData.email, formData.password); //console the inputs

        try {
            const resp = await createUser(formData.email, formData.password, formData.fullname);
            console.log("response:", resp);

            if (resp) {
                alert("You successfully signed up!");
                navigate("/");
            }
        } catch (error) {
            console.error("Log-in failed!", error);
            alert("Log-in failed. Please try again.");
        }
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
                            name="fullname"
                            placeholder="Full Name"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                            className="w-full pl-2 bg-transparent outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaEnvelope className="text-primary" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-2 bg-transparent outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pl-2 bg-transparent outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
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
