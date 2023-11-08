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
import ManageSingleFoodPage from "../pages/ManageSingleFoodPage";
import MyFoodRequestPage from "../pages/MyFoodRequestPage";
import EditPage from "../pages/EditPage";
import Errorpage from "../pages/Errorpage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/addfood",
                element: <AddFoodPage></AddFoodPage>,
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/availablefoods",
                element: <AvailableFoodsPage></AvailableFoodsPage>,
                loader: () => fetch("http://localhost:5000/FeaturedFoods"),
                errorElement: <Errorpage></Errorpage>

            },
            {
                path: "/SingleFooddetails/:id",
                element: <SingleFooddetailspage></SingleFooddetailspage>,
                loader: ({ params }) => fetch(`http://localhost:5000/FeaturedFoodss/${params.id}`),
                errorElement: <Errorpage></Errorpage>

            },
            {
                path: "/ManagefoodPage",
                element: <ManagefoodPage></ManagefoodPage>,
                errorElement: <Errorpage></Errorpage>


            },
            {
                path: '/manage/:id',
                element: <ManageSingleFoodPage></ManageSingleFoodPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/RequestFood/${params.id}`),
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: '/Myfoodrequest',
                element: <MyFoodRequestPage></MyFoodRequestPage>,
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/EditPage/:id",
                element: <EditPage></EditPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/FeaturedFoodss/${params.id}`),
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>,
                errorElement: <Errorpage></Errorpage>

            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>,
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
                errorElement: <Errorpage></Errorpage>
            }
        ]
    },
]);

export default Router;