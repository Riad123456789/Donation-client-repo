import { useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const HomePage = () => {

const data = useLoaderData()
console.log(data)

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;