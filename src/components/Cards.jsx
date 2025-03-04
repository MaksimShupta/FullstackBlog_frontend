import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router";
import { CategoryContext } from "../App";

//Sketch of cards that will be displayed
//TODO: Code must be updated and tested
const Cards = ({ data }) => {
  const [cards, setCards] = useState({});
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("");
  const { categories } = useContext(CategoryContext);
  const [filteredCards, setFilteredCards] = useState([]);

  const cats = Object.keys(categories || {}).map((key) => ({
    value: key,
    label: categories[key],
  }));
  useEffect(() => {
    setCards(data);
  }, [data]);
  const arr = data.data;
  console.log("Cards data: ", arr);

  useEffect(() => {
    let filtered = Object.values(cards);

    if (categoryFilter) {
      filtered = filtered.filter((i) => i.category === categoryFilter);
    }
    setFilteredCards(filtered);
  }, [categoryFilter, cards]);

  const onDelete = (key) => {
    //TODO: update the code later
    setCards(cards.filter((card) => card.id !== key));
  };

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
              className="flex items-center bg-white-500 text-white px-4 py-2 rounded-lg hover:bg-white transition"
            ></button>
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
