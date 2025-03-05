import React, { useState, useContext } from "react";
import { CategoryContext } from "../App";
import Select from "react-select";
import { updatePost } from "../services/postsApi.js";
import { useNavigate } from "react-router";

function EditArticle({ isOpen, onClose, onConfirm, initialData = {} }) {
  const [form, setForm] = useState({
    author: initialData.author || "",
    title: initialData.title || "",
    category: initialData.category || "",
    context: initialData.context || "",
    cover: initialData.cover || "",
    date: initialData.date || "",
  });
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [author, setAuthor] = useState(initialData.author || "");
  /*const [title, setTitle] = useState(initialData.title || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [context, setContext] = useState(initialData.context || "");
  const [cover, setCover] = useState(initialData.cover || "");
  const [date, setDate] = useState(
    initialData.date ? formatDate(initialData.date) : ""
  );*/

  const { categories } = useContext(CategoryContext);
  console.log("Current category:", initialData.category);
  console.log("Categories:", categories);
  console.log(
    "Result:",
    categories.find((i) => i === initialData.category)
  );
  const categoryOptions = categories
    ? Object.keys(categories).map((key) => ({
        label: categories[key],
        value: key,
      }))
    : [];
  console.log("caegory options start:", categoryOptions);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (selectedOption) => {
    setForm((prev) => ({ ...prev, category: selectedOption.value }));
  };
  //TODO:finish & test this method
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePost(initialData.id, form);
      alert("The item was successfully updated!");
      onConfirm({ form });
      navigate(`/post/${id}`); //???
    } catch (error) {
      console.error("Error by updating data:", error);
    }
  };
  if (!isOpen) return null;
  console.log("Current category:", initialData.category);
  console.log("Categories:", categoryOptions);
  console.log(
    "Category options:",
    categoryOptions.find((cat) => cat.value === initialData.category)
  );
  console.log("Initial date:", form.date);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Article</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              type="text"
              value={author || ""}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, author: e.target.value }))
              }
              //onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Enter author name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={form.title || ""}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              //onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Enter article title"
            />
          </div>
          {/*<div>
            <label className="block mb-1 font-semibold" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              type="text"
              value={category || ""}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter category"
            />*/}
          {categoryOptions.length > 0 && (
            <Select
              options={categoryOptions}
              placeholder="Select category"
              value={
                categoryOptions.find((cat) => cat.value === form.category) ||
                null
              }
              onChange={handleCategoryChange}
              className="w-full"
            />
          )}
          {/*</div>*/}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="context">
              Context
            </label>
            <textarea
              id="context"
              value={form.context || ""}
              //onChange={handleChange}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, context: e.target.value }))
              }
              className="w-full border rounded p-2"
              placeholder="Enter article context"
              rows={4}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="cover">
              Cover
            </label>
            <input
              id="cover"
              type="text"
              value={form.cover || ""}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, cover: e.target.value }))
              }
              //onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Enter cover image URL"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={form.date || initialData.date || ""}
              //onChange={handleChange}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, date: e.target.value }))
              }
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
