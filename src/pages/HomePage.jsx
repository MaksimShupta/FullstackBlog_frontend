import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import { getPosts } from "../services/postsApi.js";
import { useOutletContext } from "react-router";

const HomePage = () => {
    const [data, setData] = useState([]);
    const { searchQuery } = useOutletContext();
    useEffect(() => {
        const books = async () => {
            try {
                const posts = await getPosts();
                console.log("Posts:", posts);
                setData(posts.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        books();
    }, []);

    //const filteredData = data.filter((book) =>
    // book.title.toLowerCase().includes(searchQuery.toLowerCase())
    //);

    console.log("Home Page Data:", data);
    return (
        <div className="flex flex-col bg-gray-900 text-white min-h-screen">
            <main className="flex-grow container mx-auto p-4">
                <Cards data={data} searchQuery={searchQuery} />
            </main>
        </div>
    );
};

export default HomePage;
