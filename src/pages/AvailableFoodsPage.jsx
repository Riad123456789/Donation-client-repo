import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxios from '../hookes/useAxios';
import AvailableFoodCard from '../allcard/AvailableFoodCard';
// import { useLoaderData } from 'react-router-dom';

const AvailableFoodsPage = () => {

    // const LoaderData = useLoaderData()

    const foodName = [
        'Vegetable Stir-Fry',
        ' Chicken Fajitas',
        'Margherita Pizza'
    ]


    const [Date, setDate] = useState("")
    const [foodname, setfoodname] = useState("")
    const axios = useAxios()


    // console.log(foodname)

    const getfoodData = async () => {
        const res = await axios.get(`/foodName?sortField=food_quantity&sortOrder=${Date}&food_name=${foodname}`)
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ['AddFooddata', Date, foodname],
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
                    <select onChange={(e) => setfoodname(e.target.value)} className="input input-bordered">
                        <option disabled selected > choose one  </option>
                        {foodName?.map(items => <option key={items}> {items} </option>)}
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