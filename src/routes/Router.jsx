import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>

            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path:"/login",
                element:<LoginPage></LoginPage>
            }
        ]
    },
]);

export default Router;