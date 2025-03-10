import React, { useState, useContext } from "react";
import Select from "react-select";
import Button from "../components/ui/Button";
import { CategoryContext } from "../App";
import Navbar from "../components/Navbar";
import { formatDate } from "../utils/dateUtils";
import { createPost } from "../services/postsApi";
import { useNavigate } from "react-router";

const CreatePostPage = () => {
    const navigate = useNavigate();
    const { categories } = useContext(CategoryContext);
    const [displayDate, setDisplayDate] = useState(
        formatDate(new Date().toISOString().split("T")[0])
    );
    const defaultCoverImage =
        "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const [categoryError, setCategoryError] = useState(false);

    const cats = categories.map((key) => ({
        value: key,
        label: key.toUpperCase(),
    }));

    const currentDate = new Date().toISOString().split("T")[0];

    const [form, setForm] = useState({
        title: "",
        author: "",
        date: currentDate,
        cover: "",
        category: null,
        context: "",
    });

    const handleCategoryChange = (selectedOption) => {
        setForm({ ...form, category: selectedOption.value });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setDisplayDate(formatDate(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.category) {
            setCategoryError(true);
            alert("Choose genre");
            return;
        }
        setCategoryError(false);
        try {
            const newPost = await createPost(form);

            //reset
            setForm(form);

            console.log("newPost", newPost);
            alert("Successfully added this post.");
            navigate("/home");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating this post.");
        }
    };

    const handleCancel = () => {
        navigate("/");
    };

    const handleDateIconClick = () => {
        document.getElementById("date-input").focus();
    };

    return (
        <div className="bg-gray-900 text-black min-h-screen">
            <section className="items-center flex flex-col px-4 py-10">
                <div className="border border-light textLight rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-5 bg-bgLight">
                    <form
                        onSubmit={handleSubmit}
                        id="add-form"
                        className="items-center flex flex-col px-4 pb-8 gap-5"
                    >
                        <label className="input-custom gap-2 w-full">
                            <input
                                value={form.title}
                                onChange={handleChange}
                                name="title"
                                className="grow w-full"
                                placeholder="Add Article Title"
                                required
                            />
                        </label>

                        <label className="input-custom gap-2 w-full">
                            <input
                                value={form.author}
                                onChange={handleChange}
                                name="author"
                                className="grow w-full"
                                placeholder="Add Author"
                                required
                            />
                        </label>

                        <div className="relative w-full">
                            <label className="input-custom gap-2 w-full">
                                <input
                                    id="date-input"
                                    value={form.date}
                                    onChange={handleChange}
                                    type="date"
                                    name="date"
                                    className="grow w-full"
                                    required
                                />
                                <div>{displayDate}</div>
                            </label>
                            <button
                                type="button"
                                onClick={handleDateIconClick}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                &#x1F4C5;
                            </button>
                        </div>

                        <label className="input-custom gap-2 w-full">
                            <input
                                value={form.cover}
                                onChange={handleChange}
                                name="cover"
                                className="grow w-full"
                                placeholder="Insert Image URL to add book cover"
                            />
                        </label>

                        {/* Cover Preview */}
                        {form.cover ? (
                            <img
                                src={form.cover}
                                alt="Cover Preview"
                                className="max-w-xs max-h-40 object-cover"
                            />
                        ) : (
                            <img
                                src={defaultCoverImage}
                                alt="Default Cover"
                                className="max-w-xs max-h-40 object-cover"
                            />
                        )}

                        <Select
                            options={cats}
                            placeholder="Select Genre(s)"
                            onChange={(selectedOption) => {
                                handleCategoryChange(selectedOption);
                                setCategoryError(false); // reset error
                            }}
                            value={cats.find((cat) => cat.value === form.category) || null}
                            className={`w-full ${categoryError ? "border-red-500 border-2" : ""}`}
                        />

                        <label className="textarea-custom gap-2 w-full">
                            <textarea
                                value={form.context}
                                onChange={handleChange}
                                name="context"
                                className="grow w-full bg-bgInput h-full"
                                placeholder="Add details about this book"
                                required
                            />
                        </label>

                        <div className="flex gap-4">
                            <Button
                                text="Save"
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition"
                            />
                            <Button
                                text="Cancel"
                                onClick={handleCancel}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                            />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CreatePostPage;
