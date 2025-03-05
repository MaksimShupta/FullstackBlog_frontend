import { useParams } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Category = () => {
    const { category } = useParams(); // Get category name from URL
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const posts = await getPosts();
                setItems(posts.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchBooks();
    }, []);

    // Filter books when items or category changes
    useEffect(() => {
        if (category && items.length > 0) {
            const filtered = items.filter(
                (book) => book.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredItems(filtered);
        }
    }, [category, items]);
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <div className="text-center my-6">
                <h1 className="text-4xl font-bold">Category: {category}</h1>
            </div>
            <div
                id="items-list"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
            >
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => <Card key={item.id} item={item} />)
                ) : (
                    <p className="text-center text-xl col-span-3">
                        No books found in this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Category;
