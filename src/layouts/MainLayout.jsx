import { Outlet } from "react-router"; // import Outlet from react router
import Header from "../components/Header"; //import Header
import Footer from "../components/Footer"; //import Footer
import { useState } from "react";

const MainLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="bg-accent flex flex-col min-h-screen">
            <Header onSearch={setSearchQuery} />
            <main>
                <Outlet context={{ searchQuery }} />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
