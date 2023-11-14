import { useContext } from 'react';
import Navbar from '../component/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyRequestCard from '../allcard/MyRequestCard';

import { Helmet } from 'react-helmet-async';

const MyFoodRequestPage = () => {

    const { user } = useContext(AuthContext)

    const ManageFood = async () => {
        const res = await axios.get(`   https://y-roan-one.vercel.app/requestedFood/request?RequesterEmail=${user?.email}`)
        return res;
    }
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['ManageFood', user],
        queryFn: ManageFood,
    })


    // console.log(data?.data)

    return (
        <div>
            <Helmet><title>  FOOD DONATION | FOOD REQUEST</title></Helmet>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    data?.data?.map(item => <MyRequestCard key={item._d} refetch={refetch} myrequestData={item} ></MyRequestCard>)
                }
            </div>


        </div>
    );
};

export default MyFoodRequestPage;