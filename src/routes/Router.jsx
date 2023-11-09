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
import PrivateRoute from "../Privatedroute/PrivateRoute";


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
                element: <PrivateRoute><AddFoodPage></AddFoodPage></PrivateRoute>,
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/availablefoods",
                element: <AvailableFoodsPage></AvailableFoodsPage>,
                loader: () => fetch(" https://server-site-project-q1s7vyni8-riads-projects-d9eea291.vercel.app/FeaturedFoods"),
                errorElement: <Errorpage></Errorpage>

            },
            {
                path: "/SingleFooddetails/:id",
                element: <PrivateRoute><SingleFooddetailspage></SingleFooddetailspage></PrivateRoute>,
                loader: ({ params }) => fetch(` https://server-site-project-q1s7vyni8-riads-projects-d9eea291.vercel.app/FeaturedFoodss/${params.id}`),
                errorElement: <Errorpage></Errorpage>

            },
            {
                path: "/ManagefoodPage",
                element: <PrivateRoute> <ManagefoodPage></ManagefoodPage></PrivateRoute>,
                errorElement: <Errorpage></Errorpage>


            },
            {
                path: '/manage/:id',
                element: <PrivateRoute><ManageSingleFoodPage></ManageSingleFoodPage></PrivateRoute>,
                loader: ({ params }) => fetch(` https://server-site-project-q1s7vyni8-riads-projects-d9eea291.vercel.app/FeaturedFoodss/${params.id}`),
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: '/Myfoodrequest',
                element: <PrivateRoute><MyFoodRequestPage></MyFoodRequestPage></PrivateRoute>,
                loader: () => fetch(' https://server-site-project-q1s7vyni8-riads-projects-d9eea291.vercel.app/requestedFood'),
                errorElement: <Errorpage></Errorpage>
            },
            {
                path: "/EditPage/:id",
                element: <PrivateRoute><EditPage></EditPage></PrivateRoute>,
                loader: ({ params }) => fetch(` https://server-site-project-q1s7vyni8-riads-projects-d9eea291.vercel.app/FeaturedFoodss/${params.id}`),
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