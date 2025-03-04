import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router";
import { CategoryContext } from "../App";

//Sketch of cards that will be displayed
//TODO: Code must be updated and tested
const Cards = ({ data }) => {
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
    setFilteredCards(filtered);
  }, [categoryFilter, cards]);

  // Handle deletion
  const onDelete = (key) => {
    setCards((prevCards) =>
      Array.isArray(prevCards)
        ? prevCards.filter((card) => card.id !== key)
        : []
    );
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
        {Array.isArray(filteredCards) &&
          filteredCards.map((item) => (
            <Card
              key={item.id}
              itemKey={item.id}
              author={item.author}
              title={item.title}
              date={item.date}
              category={item.category}
              context={item.context}
              onEdit={() => onEdit(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
