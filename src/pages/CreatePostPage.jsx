import Button from "../components/ui/Button"; 

const CreatePostPage = () => {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();

  const cats = categories.map((key) => ({
    value: key,
    label: key.toUpperCase(),
  }));

  const [form, setForm] = useState({
    title: "",
    date: "",
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
    // Add code here to save inputs
    navigate("/");
  };

  const handleCancel = () => {
    // Navigate back to home page without saving
    navigate("/");
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
            {/* Book Title */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.title}
                onChange={handleChange}
                name="title"
                className="grow w-full"
                placeholder="Book Title"
                required
              />
            </label>

            {/* Article publishing date */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.date}
                onChange={handleChange}
                type="date"
                name="date"
                className="grow w-full"
                required
              />
            </label>

            {/* Image URL */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.imageUrl}
                onChange={handleChange}
                name="imageUrl"
                className="grow w-full"
                placeholder="Image URL"
              />
            </label>

            {/* Book Genre */}
            <Select
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
            />

            {/* Book Details / Description */}
            <label className="textarea-custom gap-2 w-full">
              <textarea
                value={form.description}
                onChange={handleChange}
                name="description"
                className="grow w-full bg-bgInput h-full"
                placeholder="Describe what you are going to do ..."
                required
              />
            </label>

            {/* Submit and Cancel Buttons */}
            <div className="flex gap-4">
              {/* Submit Button */}
              <Button
                text="Save"
                onClick={handleSubmit}
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition"
              />
              {/* Cancel Button */}
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
