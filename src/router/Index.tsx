import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";
import AuthorPage from "../Pages/AuthorPage";
import Pages from "../Pages/Pages";
import SinglePost from "../Pages/SinglePost";
import Blog from "../Pages/Blog";
import BlogLogin from "../Pages/BlogLogin";
<<<<<<< HEAD
import LoginPage from "../pages/login";
// import LoginPage from "../Pages/BlogLogin";
=======
>>>>>>> ec27b1511b98707c104d9d6b7735cd4e1d08f657

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog-form" element={<Blog />}></Route>
<<<<<<< HEAD
          <Route path="/login" element={<LoginPage />}></Route>
=======
>>>>>>> ec27b1511b98707c104d9d6b7735cd4e1d08f657
          <Route path="/blog" element={<BlogLogin />}></Route>
          <Route path="/single-post" element={<SinglePost />}></Route>
          <Route path="/pages" element={<Pages />}></Route>
          <Route path="/author-page" element={<AuthorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
