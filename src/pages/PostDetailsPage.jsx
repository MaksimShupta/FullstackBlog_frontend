import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { updatePost } from "../services/postsApi";
import { useParams } from "react-router";
import { getPost } from "../services/postsApi.js";
import EditArticle from "../components/EditArticle.jsx";

const PostDetailsPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPost(id);
                console.log(postData);
                setPost(postData);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    const handleEdit = async (updatedData) => {
        try {
            const updatedPost = await updatePost(id, updatedData);
            console.log("Post updated:", updatedPost);

            setPost(updatedPost);
            closeModal();
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-auto mx-auto p-6">
            <div className="card rounded-lg">
                <div className="card-body flex flex-col md:flex-row gap-6">
                    <figure className="md:w-1/3 h-[600px] bg-gray-300 flex rounded-md">
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
                            <h2 className="text-2xl text-white font-bold mb-2">{post.title}</h2>
                            <p className="text-sm mb-4 text-gray-400">
                                {new Date(post.date)
                                    .toLocaleDateString("en-GB")
                                    .replace(/\//g, "-") + " "}
                                | Article ID {post.id}
                            </p>

                            <p className="text-neutral-100 leading-relaxed mb-6 flex-1">
                                {post.context}
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-row gap-8 mb-6 text-gray-400">
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
                                    className="bg-accent hover:bg-accent2 border border-[#DDEB9D] text-primary px-6"
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
                initialData={post}
            />
        </div>
    );
};

export default PostDetailsPage;
