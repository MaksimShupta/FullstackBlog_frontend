import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { useState } from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Cards />
      </main>
    </div>
  );
};

export default HomePage;
