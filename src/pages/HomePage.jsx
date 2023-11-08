import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import FeaturedFoodCard from "../allcard/FeaturedFoodCard";
import useAxios from "../hookes/useAxios";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
    
    const axios = useAxios()

    const getfoodData = async () => {
        const res = await axios.get('/foodName?foodName=&sortField=FoodQuantity&sortOrder=desc')
        return res;
    }

    const { data } = useQuery({
        queryKey: ['AddFooddata', Date],
        queryFn: getfoodData,
    })

    // console.log(data.data)

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.data?.slice(0, 6).map(singleData => <FeaturedFoodCard key={singleData._id} FooData={singleData}></FeaturedFoodCard>)
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