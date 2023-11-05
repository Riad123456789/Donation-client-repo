import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxios from '../hookes/useAxios';
import AvailableFoodCard from '../allcard/AvailableFoodCard';

const AvailableFoodsPage = () => {

    const axios = useAxios()
    const [Date, setDate] = useState("")

    console.log(Date)



    const getfoodData = async () => {
        const res = await axios.get(`/foodName?food_name=&sortField=food_quantity&sortOrder=${Date}`)
        return res;
    }
    const { data, isLoading } = useQuery({
        queryKey: ['AddFooddata', Date],
        queryFn: getfoodData,
    })

    // console.log(data)



    if (isLoading) {
        return <p>loading.....</p>
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className="navbar bg-red-500 p-3">
                <div className="flex-1">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
                <div className="flex-none">

                    <select onChange={(e) => setDate(e.target.value)} className="input input-bordered">

                        <option selected disabled > Sorting by  </option>
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