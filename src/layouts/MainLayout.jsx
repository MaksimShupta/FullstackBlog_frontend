import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <main className=" py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
