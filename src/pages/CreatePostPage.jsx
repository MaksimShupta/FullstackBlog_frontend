import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";
import Button from "../components/ui/Button";
import { CategoryContext } from "../App";
import Navbar from '../components/Navbar';

const CreatePostPage = () => {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();

  const cats = categories.map((key) => ({
    value: key,
    label: key.toUpperCase(),
  }));

  const currentDate = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    title: "",
    author: "", // Neues Feld für den Autor
    date: currentDate, // Current Date as Default
    imageUrl: "",
    category: "",
    description: "",
  });

  const handleCategoryChange = (selectedOption) => {
    setForm({ ...form, category: selectedOption.value });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save input data
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleDateIconClick = () => {
    document.getElementById("date-input").focus();
  };

  return (
    <div className="bg-gray-900 text-black min-h-screen">
      <Navbar />
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
              </label>
              <button
                type="button"
                onClick={handleDateIconClick}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                &#x1F4C5; {/* Calender Icon */}
              </button>
            </div>

            <label className="input-custom gap-2 w-full">
              <input
                value={form.imageUrl}
                onChange={handleChange}
                name="imageUrl"
                className="grow w-full"
                placeholder="Image URL"
              />
            </label>

            {/* <Select
              options={cats}
              placeholder="Select category"
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={categories[e.value]}
                    className="w-6 h-6 mr-2"
                    alt={e.label}
                  />
                  {e.label}
                </div>
              )}
              onChange={handleCategoryChange}
              className="w-full"
            /> */}


// Simple drop down menu for book genre options:

          <Select
          options={cats}
          placeholder="Select Genre(s)"
          onChange={handleCategoryChange}
          value={cats.find((cat) => cat.value === form.category)}
          className="w-full"
          />



            <label className="textarea-custom gap-2 w-full">
              <textarea
                value={form.description}
                onChange={handleChange}
                name="description"
                className="grow w-full bg-bgInput h-full"
                placeholder="Add details about this book"
                required
              />
            </label>

            <div className="flex gap-4">
              <Button
                text="Save"
                onClick={handleSubmit}
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