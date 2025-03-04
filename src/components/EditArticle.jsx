import React, { useState } from "react";

function EditArticle({ isOpen, onClose, onConfirm, initialData = {} }) {
    const {
        author: initialAuthor = "",
        title: initialTitle = "",
        category: initialCategory = "",
        context: initialContext = "",
        cover: initialCover = "",
        date: initialDate = "",
    } = initialData;

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
        const day = String(dateObj.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const [author, setAuthor] = useState(initialAuthor);
    const [title, setTitle] = useState(initialTitle);
    const [category, setCategory] = useState(initialCategory);
    const [context, setContext] = useState(initialContext);
    const [cover, setCover] = useState(initialCover);
    const [date, setDate] = useState(formatDate(initialDate));

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm({ author, title, category, context, cover, date });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Edit Article</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="author"
                        >
                            Author
                        </label>
                        <input
                            id="author"
                            type="text"
                            value={author || ""}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full border rounded p-2"
                            placeholder="Enter author name"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title || ""}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded p-2"
                            placeholder="Enter article title"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <input
                            id="category"
                            type="text"
                            value={category || ""}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border rounded p-2"
                            placeholder="Enter category"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="context"
                        >
                            Context
                        </label>
                        <textarea
                            id="context"
                            value={context || ""}
                            onChange={(e) => setContext(e.target.value)}
                            className="w-full border rounded p-2"
                            placeholder="Enter article context"
                            rows={4}
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="cover"
                        >
                            Cover
                        </label>
                        <input
                            id="cover"
                            type="text"
                            value={cover || ""}
                            onChange={(e) => setCover(e.target.value)}
                            className="w-full border rounded p-2"
                            placeholder="Enter cover image URL"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="date"
                        >
                            Date
                        </label>
                        <input
                            id="date"
                            type="date"
                            value={date || ""}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditArticle;
