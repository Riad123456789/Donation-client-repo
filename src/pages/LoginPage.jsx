import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";

const LoginPage = () => {

    const { LoginUser,loading } = useContext(AuthContext)
    const [showpassword, setshowpassword] = useState(false)
    const navigate = useNavigate();
    const Location = useLocation();

    // if (loading) {
    //     return <span className="loading loading-spinner loading-md "></span>
    // }




    const HandleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password)

        LoginUser(email, password)
            .then(() => {
                toast.success("successfully login")
                navigate(Location?.state ? Location.state : "/")
            })
            .catch(error => {
                toast.error(error.message.slice(10, 48));
            })
    }


    return (

        <div>
            <Helmet><title>FOOD DONATION | LOGIN</title></Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HandleLogin} className="card-body">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email :</label>
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email..." required="" />
                            </div>

                            <div className="relative">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Password :</label>
                                <input type={showpassword ? 'text' : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                                <span className="absolute top-10 right-3" onClick={() => setshowpassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Do not have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to={"/register"}><span className="text-blue-600">register here</span></Link></a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default LoginPage;