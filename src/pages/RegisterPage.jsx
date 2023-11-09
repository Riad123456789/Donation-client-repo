import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";




const RegisterPage = () => {

    const { CreatUser, googleLogin, handleupdateProfile ,loading } = useContext(AuthContext);
    const [showpassword, setshowpassword] = useState(false)
    const navigat = useNavigate();


    if (loading) {
        return <span className="loading loading-spinner loading-md "></span>
    }



    const HandelSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, password, email, photo)


        // if (password.length < 8) {
        //     alert('password less than 8 characters')
        // } else if (!/[A-Z]/.test(password)) {
        //     alert('password should have a one uppercase characters')
        // } else if (!/[a-z]/.test(password)) {
        //     alert('password should have a one lowercase characters')
        // } else if (!/[@,$,#,%,&]/.test(password)) {
        //     alert('password should have a one spaical characters')
        // }


        CreatUser(email, password, name, photo)
            .then(() => {

                handleupdateProfile(name, photo)
                    .then(() => {

                        toast.success('successfully register')
                        navigat("/")

                    })
            })
            .catch((error) => {
                toast.error(error.message.slice(10, 47))
            })

    }


    const handleGoogle = (media) => {
        media()
            .then(() => {
                toast.success("successfully register")
                navigat("/")
            }
            )
            .catch((error) => {

                toast.error(error.message.slice(10, 50))
            })
    }


    return (
        <div>

            <Helmet><title>FOOD DONATION | REGISTER</title></Helmet>
            <Navbar></Navbar>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form onSubmit={HandelSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." required="" />
                                </div>
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
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL :</label>
                                    <input type="text" name="photo" placeholder="photo..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full btn  text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Create an account</button>

                            </form>

                            <button onClick={() => handleGoogle(googleLogin)} type="submit" className="w-full btn  text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> google</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to={"/login"}><span className="text-blue-700">Login here</span></Link></a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
       
        </div>
    );
};

export default RegisterPage;