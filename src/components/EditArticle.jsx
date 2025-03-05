import React, { useState, useContext } from "react";
import { CategoryContext } from "../App";
import Select from "react-select";
import Button from "./ui/Button";

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
            <div className="bg-primary p-6 rounded-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-accent2">
                    Edit Article
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            className="block mb-1 font-semibold text-accent"
                            htmlFor="author"
                        >
                            Author
                        </label>
                        <input
                            id="author"
                            type="text"
                            value={form.author || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2 bg-accent text-neutral-50"
                            placeholder="Enter author name"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold text-accent"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={form.title || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2 bg-accent text-neutral-50"
                            placeholder="Enter article title"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold text-accent"
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
                                className="w-full text-neutral-50"
                                styles={{
                                    control: (baseStyles) => ({
                                        ...baseStyles,
                                        backgroundColor: "#27667B",
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        backgroundColor: "#27667B",
                                    }),
                                    option: (base, { isFocused }) => ({
                                        ...base,
                                        backgroundColor: isFocused
                                            ? "#143D60"
                                            : "#27667B",
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "#F9FAFB", // ✅ Fixes the selected value color
                                    }),
                                }}
                            />
                        )}
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold text-accent"
                            htmlFor="context"
                        >
                            Context
                        </label>
                        <textarea
                            id="context"
                            value={form.context || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2 bg-accent text-neutral-50"
                            placeholder="Enter article context"
                            rows={4}
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold text-accent"
                            htmlFor="cover"
                        >
                            Cover
                        </label>
                        <input
                            id="cover"
                            type="text"
                            value={form.cover || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2 bg-accent text-neutral-50"
                            placeholder="Enter cover image URL"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold text-accent"
                            htmlFor="date"
                        >
                            Date
                        </label>
                        <input
                            id="date"
                            type="date"
                            value={form.date || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2 bg-accent text-neutral-50"
                        />
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                        {/* <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded"
                        >
                            Cancel
                        </button> */}
                        <Button
                            type="button"
                            text="Cancel"
                            onClick={onClose}
                            className="bg-primary hover:bg-accent2 border border-[#27667B] text-accent hover:text-primary px-6"
                        />
                        {/* <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Confirm
                        </button> */}
                        <Button
                            type="submit"
                            text="Confirm"
                            className="bg-accent hover:bg-accent2 border border-[#DDEB9D] text-primary hover:text-secondary px-6"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditArticle;
