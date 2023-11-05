import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import AddFoodPage from "../pages/AddFoodPage";
import AvailableFoodsPage from "../pages/AvailableFoodsPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch('http://localhost:5000/FeaturedFoods')
            },
            {
                path: "/addfood",
                element: <AddFoodPage></AddFoodPage>
            },
            {
                path: "/availablefoods",
                element: <AvailableFoodsPage></AvailableFoodsPage>,
                loader:()=>fetch('http://localhost:5000/FeaturedFoods')
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
                path: "/login",
                element: <LoginPage></LoginPage>
            }
        ]
    },
]);

export default Router;