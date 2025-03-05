import React, { useState, useContext } from "react";
import { CategoryContext } from "../App";
import Select from "react-select";

function EditArticle({ isOpen, onClose, onConfirm, initialData = {} }) {
    const [form, setForm] = useState({
        author: initialData.author || "",
        title: initialData.title || "",
        category: initialData.category || "",
        context: initialData.context || "",
        cover: initialData.cover || "",
        date: initialData.date
            ? new Date(initialData.date).toISOString().split("T")[0]
            : "",
    });

    const { categories } = useContext(CategoryContext);
    const categoryOptions = categories
        ? Object.keys(categories).map((key) => ({
              label: categories[key],
              value: key,
          }))
        : [];

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log("date here", id);
        console.log("date value here", value);
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleCategoryChange = (selectedOption) => {
        setForm((prev) => ({ ...prev, category: selectedOption.label }));
    };

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(form);
        alert("The item was successfully updated!");
    };

    // console.log("Current category:", initialData.category);
    // console.log("Categories:", categoryOptions);
    // console.log(
    //     "Category options:",
    //     categoryOptions.find((cat) => cat.label === initialData.category)
    // );
    // console.log("Initial date:", form.date);
    // console.log("Category Here", categoryOptions);

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
                            value={form.author || ""}
                            onChange={handleChange}
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
                            value={form.title || ""}
                            onChange={handleChange}
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

                        {categoryOptions.length > 0 && (
                            <Select
                                options={categoryOptions}
                                placeholder="Select category"
                                value={
                                    categoryOptions.find(
                                        (cat) => cat.label === form.category
                                    ) || null
                                }
                                onChange={handleCategoryChange}
                                className="w-full"
                            />
                        )}
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
                            value={form.context || ""}
                            onChange={handleChange}
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
                            value={form.cover || ""}
                            onChange={handleChange}
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
                            value={form.date || ""}
                            onChange={handleChange}
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
