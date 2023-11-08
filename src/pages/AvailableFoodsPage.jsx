import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxios from '../hookes/useAxios';
import AvailableFoodCard from '../allcard/AvailableFoodCard';
import { useLoaderData } from 'react-router-dom';

const AvailableFoodsPage = () => {

    const LoaderData = useLoaderData()

    const [Date, setDate] = useState("")
    const [Foodname, Setfoodname] = useState("")
    const axios = useAxios()

    // console.log(Foodname)

    const getfoodData = async () => {
        const res = await axios.get(`/foodName?sortField=ExpiredDate&sortOrder=${Date}&foodName=${Foodname}`)
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
            <Navbar></Navbar>

            <div className="navbar bg-red-500 p-3">
                <div className="flex-1">
                    <select onChange={(e) => Setfoodname(e.target.value)} className="input input-bordered">
                        <option disabled selected > choose one  </option>
                        {LoaderData
                            .map(item =>  (
                                <option key={item._id}>{item.foodName}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex-none">
                    <select onChange={(e) => setDate(e.target.value)} className="input input-bordered">
                        <option disabled selected > Sorting  </option>
                        <option value="asc"> Link 2 </option>
                        <option value="desc"> Link 3 </option>
                    </select>
                </div>
            </div>

            <div className='grid mt-24  gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data?.data?.map(singleData => <AvailableFoodCard key={singleData._id} AvailableFoodData={singleData} ></AvailableFoodCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AvailableFoodsPage;