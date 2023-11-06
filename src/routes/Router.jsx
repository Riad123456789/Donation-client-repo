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
import SingleFooddetailspage from "../pages/SingleFooddetailspage";
import ManagefoodPage from "../pages/ManagefoodPage";


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
                path: "/addfood",
                element: <AddFoodPage></AddFoodPage>
            },
            {
                path: "/availablefoods",
                element: <AvailableFoodsPage></AvailableFoodsPage>,
                loader: () => fetch("http://localhost:5000/FeaturedFoods")

            },
            {
                path: "/SingleFooddetails/:id",
                element: <SingleFooddetailspage></SingleFooddetailspage>,
                loader: ({ params }) => fetch(`http://localhost:5000/FeaturedFoodss/${params.id}`)

            },
            {
                path: "/ManagefoodPage",
                element: <ManagefoodPage></ManagefoodPage>
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