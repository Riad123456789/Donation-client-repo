import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const LoginPage = () => {

    const { LoginUser } = useContext(AuthContext)
    const [showpassword, setshowpassword] = useState(false)


    const HandleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password)

        LoginUser(email, password)
            .then(() => {
                toast.success("successfully login")
            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    return (

        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HandleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span className="absolute top-[52px] right-3" onClick={() => setshowpassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Do not have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to={"/register"}>register here</Link></a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default LoginPage;