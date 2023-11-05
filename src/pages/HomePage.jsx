import { Link, useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import FeaturedFoodCard from "../allcard/FeaturedFoodCard";

const HomePage = () => {

    const LoaderData = useLoaderData()


    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    LoaderData?.slice(0, 6).map(data => <FeaturedFoodCard key={data._id} FooData={data}></FeaturedFoodCard>)
                }
            </div>

            <div className="text-center p-5">
                <Link to={'/availablefoods'}> <button className="btn btn-primary">Show All</button></Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomePage;