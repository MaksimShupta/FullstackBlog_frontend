import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router";
import { CategoryContext } from "../App";
import { deletePost } from "../services/postsApi";

//Sketch of cards that will be displayed
//TODO: Code must be updated and tested
const Cards = ({ data, searchQuery }) => {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();
    const [categoryFilter, setCategoryFilter] = useState("");
    const { categories } = useContext(CategoryContext);
    const [filteredCards, setFilteredCards] = useState([]);

    // Ensure categories is not undefined
    const cats = Object.keys(categories || {}).map((key) => ({
        value: key,
        label: categories[key],
    }));

    // Ensure `data` is safely assigned
    useEffect(() => {
        if (Array.isArray(data)) {
            setCards(data);
        } else if (Array.isArray(data?.data)) {
            setCards(data.data);
        } else {
            setCards([]);
        }
    }, [data]);

    // Filter based on category
    useEffect(() => {
        let filtered = Array.isArray(cards) ? [...cards] : [];

        if (categoryFilter) {
            filtered = filtered.filter((i) => i.category === categoryFilter);
        }
        if (searchQuery) {
            filtered = filtered.filter((e) =>
                e.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        setFilteredCards(filtered);
    }, [categoryFilter, searchQuery, cards]);

    // Handle deletion
    const onDelete = async (id) => {
        try {
            const response = await deletePost(id);
            //if (!response.ok) {
            //  throw new Error("Failed to delete the item!");
            //}
            setCards((prevCards) => prevCards.filter((card) => card.id !== id));
            alert("The item was successfully deleted!");
            window.location.reload();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    // Handle edit navigation
    const onEdit = (key) => {
        if (!key) return;
        navigate(`/edit/${key}`);
    };

    return (
        <div>
            {/* Wrapper to ensure full width */}
            <div className="flex justify-center w-full">
                {/* Centered button container */}
                <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
                    {cats.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setCategoryFilter(cat.label)}
                            className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Notes List */}
            <div
                id="items-list"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
            >
                {filteredCards.map((item) => (
                    <Card
                        key={item.id}
                        itemKey={item.id}
                        author={item.author}
                        title={item.title}
                        date={new Date(item.date).toLocaleDateString("de-DE")}
                        category={item.category}
                        context={item.context}
                        cover={item.cover}
                        onEdit={() => onEdit(item.id)}
                        onDelete={() => onDelete(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
