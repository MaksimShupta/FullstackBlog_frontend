// import logo from "../assets/logo.png"; //importing logo from assets
import logo from "../assets/Fiction-Addiction-logo-vertical-light.svg"; //importing new logo from assets
import { useState } from "react"; //import useState from react
import { FaUser, FaLock } from "react-icons/fa"; //import FaUser abd FaLock from react-icons
import { Link, useNavigate } from "react-router"; //importing Link from react-router
import { getUser } from "../services/usersApi";
const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Check for empty fields
        const emptyField = Object.entries(formData).find(([key, value]) => !value);
        if (emptyField) {
            alert(`Please fill in the ${emptyField[0]} field.`);
            return;
        }

        try {
            const resp = await getUser(formData.email, formData.password);
            console.log("username:", formData.email);
            console.log("Log-in response:", resp);

            if (resp) {
                alert("You successfully logged in!");
                navigate("/home");
            }
        } catch (error) {
            console.error("Log-in failed!", error);
            alert("Log-in failed. Please try again.");
        }
    };

    return (
        <div className="flex flex-col justify-start items-center mt-12 min-h-screen bg-accent">
            <img src={logo} className="w-[12rem] h-[12rem]" alt="Logo" />
            <div className="bg-primary p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-accent mb-6">Log in</h2>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaUser className="text-primary" />
                        <input
                            type="email"
                            name="email" // Ensure the name is set
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange} // Directly pass handleChange
                            required
                            className="w-full pl-2 bg-transparent outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg px-3 py-2 bg-accent">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            name="password" // Ensure the name is set
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange} // Directly pass handleChange
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
