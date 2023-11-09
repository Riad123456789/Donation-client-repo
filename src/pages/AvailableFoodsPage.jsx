import Navbar from '../component/Navbar';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxios from '../hookes/useAxios';
import AvailableFoodCard from '../allcard/AvailableFoodCard';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AvailableFoodsPage = () => {

    const LoaderData = useLoaderData()

    const [Date, setDate] = useState("")
    const [Foodname, Setfoodname] = useState("")
    const axios = useAxios()

    // console.log(Foodname)

    const getfoodData = async () => {
        const res = await axios.get(`/foodName?FoodStatus=available&sortField=ExpiredDate&sortOrder=${Date}&foodName=${Foodname}`)
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ['AddFooddata', Date, Foodname],
        queryFn: getfoodData,
    })

    // console.log(data.data)


    if (isLoading) {
        return <p>loading.....</p>
    }


    return (
        <div>
            <Helmet><title> FOOD DONATION | AVAILABLE FOOD</title></Helmet>

            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>

            <div className='p-8'>

                <div className="navbar  bg-red-500 p-5">
                    <div className="flex-1">
                        <select onChange={(e) => Setfoodname(e.target.value)} className="input input-bordered">
                            <option disabled selected > choose one  </option>
                            {LoaderData
                                .map(item => (
                                    <option key={item._id}>{item.foodName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex-none">
                        <select onChange={(e) => setDate(e.target.value)} className="input input-bordered">
                            <option disabled selected > SORTING  </option>
                            <option value="asc"> LOW to HIGH </option>
                            <option value="desc"> HIGH to LOW </option>
                        </select>
                    </div>
                </div>

                <div className='grid mt-24 grid-cols-1  gap-10 md:grid-cols-2  lg:grid-cols-3'>
                    {
                        data?.data?.map(singleData => <AvailableFoodCard key={singleData._id} AvailableFoodData={singleData} ></AvailableFoodCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AvailableFoodsPage;