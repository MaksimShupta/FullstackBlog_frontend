import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CategoryContext } from "../App"; // update path if necessary
import { deletePost } from "../services/postsApi.js";
import DeleteArticle from "./DeleteArticle";

const Card = ({
    itemKey,
    author,
    title,
    date,
    category,
    context,
    onDelete,
}) => {
    const { categories } = useContext(CategoryContext);
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log("Card:", itemKey);

    const onView = (itemKey) => {
        navigate(`/post/${itemKey}`);
    };

    const handleDelete = async () => {
        try {
            // Call the delete service
            await deletePost(itemKey);
            // Notify parent component if needed
            if (onDelete) onDelete(itemKey);
        } catch (error) {
            console.error("Failed to delete post:", error);
        } finally {
            setShowDeleteModal(false);
        }
    };

    return (
        <div className="bg-[#282828] text-[#F5F5F5] rounded-xl p-6 border flex flex-col gap-8">
            <p className="px-4 py-2 bg-[#9E7A67] text-lg rounded-xl font-bold tracking-wider">
                {title}
            </p>
            <div className="flex items-center gap-4">
                <p className="text-sm">{author}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-sm">{date}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-sm">{category}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-sm">{context}</p>
            </div>
            <div className="flex gap-4 mt-2">
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 w-full md:w-auto"
                    onClick={() => onView(itemKey)}
                >
                    View
                </button>
                <button
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 w-full md:w-auto"
                    onClick={() => setShowDeleteModal(true)}
                >
                    Remove
                </button>
            </div>
            {showDeleteModal && (
                <DeleteArticle
                    title={title}
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
        </div>
    );
};

export default Card;
