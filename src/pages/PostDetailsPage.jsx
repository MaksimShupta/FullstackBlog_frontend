import { useState } from "react";
import Button from "../components/ui/Button";
import { updatePost } from "../services/postsApi";

const PostDetailsPage = ({ post }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEdit = async (updatedData) => {
        try {
            // Call the updatePost service with the post id and updated data
            const updatedPost = await updatePost(post.id, updatedData);
            console.log("Post updated:", updatedPost);
            // Optionally update local state to reflect the new data
            closeModal();
        } catch (error) {
            console.error("Error updating post:", error);
            // Optionally show an error message to the user
        }
    };

    return (
        <div className="w-auto mx-auto p-6">
            <div className="card rounded-lg">
                <div className="card-body flex flex-col md:flex-row gap-6">
                    <figure className="md:w-1/3 h-[540px] bg-gray-300 flex items-center justify-center rounded-md">
                        <span className="text-gray-500 text-lg">
                            <img
                                src={post.cover}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </span>
                    </figure>
                    <div className="md:w-2/3 flex flex-col">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-500 text-sm mb-4">
                                {post.date} | Article ID {post.id}
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                                {post.context}
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-row gap-8 mb-6">
                                <div className="space-y-1">
                                    <p>
                                        <strong>Book Author:</strong>
                                    </p>
                                    <p>{post.author}</p>
                                </div>
                                <div className="space-y-1">
                                    <p>
                                        <strong>Genre:</strong>
                                    </p>
                                    <p>{post.category}</p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    text="Update Article"
                                    onClick={openModal}
                                    className="btn-primary px-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditArticle
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleEdit}
            />
        </div>
    );
};

export default PostDetailsPage;
