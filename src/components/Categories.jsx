import CategoryButton from "../components/CategoryButton";
import { useContext } from "react";
import { CategoryContext } from "../App";

const Categories = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div
      id="cat-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
    >
      {categories.map((item, index) => (
        <CategoryButton key={index} cat={item} />
      ))}
    </div>
  );
};

export default Categories;
