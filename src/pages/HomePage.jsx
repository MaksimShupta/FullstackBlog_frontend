import Cards from "../components/Cards";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const books = async () => {
      try {
        const resp = await fetch("http://localhost:5000/api/posts");
        const res = await resp.json();
        console.log(res.data);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    books();
  }, []);

  console.log("Home Page Data:", data);
  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        <Cards data={data} />
      </main>
    </div>
  );
};

export default HomePage;
