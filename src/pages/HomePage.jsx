import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import { getPosts } from "../services/postsApi.js";

const HomePage = () => {
    const [data, setData] = useState([]);
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

    console.log("Home Page Data:", data);
    return (
        <div className="flex flex-col text-white min-h-screen">
            <main className="flex-grow container mx-auto p-4">
                <Cards data={data} />
            </main>
        </div>
    );
};

export default HomePage;
