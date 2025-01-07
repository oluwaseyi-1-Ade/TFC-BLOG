import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./pages/home";
import LoginPage from './pages/login';

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> }
    ],
  },
];

const router = createBrowserRouter(routes)

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
