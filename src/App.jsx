import { BrowserRouter as Router, Routes, Route } from "react-router"; //import BrowserRouter, Routes, Route from react-router
import HomePage from "./pages/HomePage"; //import HomePage from pages/HomePage
import CreatePostPage from "./pages/CreatePostPage"; //import CreatePostPage from pages/CreatePostPage
import PostDetailsPage from "./pages/PostDetailsPage"; //import PostDetailsPage from pages/PostDetailsPage
import MainLayout from "./layouts/MainLayout"; //import MainLayout from layouts/MainLayout

function App() {
  return (
    <Router>
      {" "}
      {/* Wrapping everything with Router */}
      <Routes>
        {/* MainLayout Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<HomePage />} />
          {/* create Route */}
          <Route path="create" element={<CreatePostPage />} />
          {/* post Route */}
          <Route path="post" element={<PostDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
