// import { CategoryContext } from "../App";
// import { useContext } from "react";
import { useNavigate } from "react-router";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaFeather } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const Card = ({
    itemKey,
    author,
    title,
    date,
    category,
    context,
    onDelete,
    cover,
}) => {
    // const { categories } = useContext(CategoryContext);
    const navigate = useNavigate();
    console.log("Card:", itemKey);

    const onView = (itemKey) => {
        navigate(`/post/${itemKey}`);
    };

    return (
        <div className="relative rounded-lg shadow bg-primary flex overflow-hidden">
            <div className="w-1/2">
                <img
                    src={cover}
                    alt="Note Thumbnail"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-1/2 p-6 flex flex-col">
                <p className="text-base text-gray-500">{date}</p>
                <h3 className="text-xl text-gray-800 font-bold leading-tight mt-2">
                    {title}
                </h3>
                <p className="text-base text-gray-700 mt-4 line-clamp-3">
                    {context}
                </p>
                <div className="flex items-center gap-1 mt-4">
                    <FaTag size={12} className="text-gray-700" />
                    <span className="text-sm text-gray-700">{category}</span>
                </div>

                <div className="flex items-center gap-1">
                    <FaFeather size={12} className="text-gray-700" />
                    <span className="text-sm text-gray-700">{author}</span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-4">
                    <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={() => onView(itemKey)}
                    >
                        <FaPencilAlt size={20} />
                    </button>
                    <button
                        className="text-gray-600 hover:text-red-600"
                        onClick={() => {
                            console.log("Deleting item with key:", itemKey);
                            if (itemKey) onDelete(itemKey);
                            else
                                console.error(
                                    "itemKey is undefined when calling onDelete"
                                );
                        }}
                    >
                        <FaRegTrashAlt size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
