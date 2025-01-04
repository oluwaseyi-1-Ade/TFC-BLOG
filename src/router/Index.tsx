import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";
import AuthorPage from "../Pages/AuthorPage";
import Pages from "../Pages/Pages";
import SinglePost from "../Pages/SinglePost";
import Blog from "../Pages/Blog";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/blog-form" element={<Blog />}></Route>
                    <Route path="/single-post" element={<SinglePost />}></Route>
                    <Route path="/pages" element={<Pages />}></Route>
                    <Route path="/author-page" element={<AuthorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes