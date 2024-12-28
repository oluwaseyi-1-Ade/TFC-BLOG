import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";
import AuthorPage from "../Pages/AuthorPage";
import Pages from "../Pages/Pages";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/blog-form" element={""}></Route>
                    <Route path="/single-post" element={""}></Route>
                    <Route path="/pages" element={<Pages />}></Route>
                    <Route path="/author-page" element={<AuthorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes