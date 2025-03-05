import { BrowserRouter as Router, Routes, Route } from "react-router"; //import BrowserRouter, Routes, Route from react-router
import HomePage from "./pages/HomePage"; //import HomePage from pages/HomePage
// import CreatePostPage from "./pages/CreatePostPage"; //import CreatePostPage from pages/CreatePostPage
import PostDetailsPage from "./pages/PostDetailsPage"; //import PostDetailsPage from pages/PostDetailsPage
import MainLayout from "./layouts/MainLayout"; //import MainLayout from layouts/MainLayout
import Category from "./pages/Category";
import { createContext } from "react";
import LoginPage from "./pages/LoginPage"; //import LoginPage from pages
import RegisterPage from "./pages/RegisterPage"; //import RegisterPage from pages
import NotFoundPage from "./pages/NotFoundPage"; // Import NotFoundPage

//Context API, for Categories
const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const categories = ["Fantasy", "Mystery", "Romance", "Science fiction"];
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

function App() {
  return (
    <Router>
      <CategoryProvider>
        {" "}
        {/* Wrapping everything with Router */}
        <Routes>
          {/* MainLayout Route */}
          <Route path="/" element={<MainLayout />}>
            {/* Home Route */}
            <Route index element={<HomePage />} />
            {/* create Route */}
            {/* <Route path="create" element={<CreatePostPage />} /> */}
            {/* post Route */}
            <Route path="post/:id" element={<PostDetailsPage />} />
            <Route path="category/:category" element={<Category />} />
            {/* login Route */}
            <Route path="login" element={<LoginPage />} />
            {/* register Route */}
            <Route path="register" element={<RegisterPage />} />
          </Route>
          {/* FetchingError Route */}
          <Route path="500" element={<FetchingErrorPage />} />
          {/* Missing Fields Route */}
          <Route path="400" element={<MissingFieldsErrorPage />} />
          {/* NotFound Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CategoryProvider>
    </Router>
  );
}

export default App;
export { CategoryContext };
