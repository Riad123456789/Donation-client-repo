import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const LoginPage = () => {


    const HandleLogin = (e) => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value
        const password = form.password.value

        console.log(name, password)
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
                                <input type="email" name="name" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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