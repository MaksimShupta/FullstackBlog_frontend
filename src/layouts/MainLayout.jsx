import { Outlet } from "react-router"; // import Outlet from react router
import Header from "../components/Header"; //import Header
import Footer from "../components/Footer"; //import Footer

const MainLayout = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <main className=" py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
