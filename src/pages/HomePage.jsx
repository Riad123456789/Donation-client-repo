import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import FeaturedFoodCard from "../allcard/FeaturedFoodCard";
import useAxios from "../hookes/useAxios";
import { useQuery } from "@tanstack/react-query";
import img from '../assets/volunteer-holding-donation-box-with-food-hunger-people-different-grocery-products-homeless-people-shelter-solidarity-charity-concept_458444-228.webp'
import { Helmet } from "react-helmet-async";

import Section1 from "../component/Section1";
import Section2 from "../component/Section2";

const HomePage = () => {

    const axios = useAxios()

    const getfoodData = async () => {
        const res = await axios.get('/foodName?FoodStatus=available&foodName=&sortField=FoodQuantity&sortOrder=desc')
        return res;
    }

    const { data } = useQuery({
        queryKey: ['AddFooddata', Date],
        queryFn: getfoodData,
    })

    // console.log(data.data)

    return (
        <div className=" w-11/12 mx-auto">

            <Helmet><title>  FOOD DONATION | HOME</title></Helmet>


            <Navbar></Navbar>

            <div>
                <img className="w-full h-[550px] mt-1" src={img} alt="" />

            </div>

            <div className=" p-7 mt-4 ">
                <p className="text-center font-semibold text-3xl text-pink-700">Featured Foods</p>
                <p className="text-center font-semibold p-2">Featured Foods represent the highest quantity of food options available.</p>
            </div>


            <div className=" w-full mx-auto mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.data?.slice(0, 6).map(singleData => <FeaturedFoodCard key={singleData._id} FooData={singleData}></FeaturedFoodCard>)
                }
            </div>

            <div className="text-center p-8">
                <Link to={'/availablefoods'}> <button className="btn bg-teal-600 text-white btn-md">==== <span className="text-black text-white">Show All</span> ====</button></Link>
            </div>

            <div className="mt-4 border pt-5">
                <Section1></Section1>
            </div>

            <div className="h-96 mt-9 mb-16 flex ">
            <Section2></Section2>

            </div>


       


        </div>
    );
};

export default HomePage;