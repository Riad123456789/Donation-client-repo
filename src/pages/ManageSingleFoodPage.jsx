import axios from 'axios';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import RequesterInformationcard from '../allcard/RequesterInformationcard';
import { Helmet } from 'react-helmet-async';


const ManageSingleFoodPage = () => {

    const info = useLoaderData()

    const {
        _id,
        foodName,
        foodImage,
        DonatorEmail,
        AdditionalNotes,
        DonatorImage,
        DonatorName,
        ExpiredDate,
        FoodQuantity,
        PickupLocation,
        FoodStatus,

    } = info

    // console.log(info)

    const ManageFood = async () => {
        const res = await axios.get(`http://localhost:5000/requestedFood/id?FoodId=${_id}`)
        return res;
    }
    const { data, refetch,isFetching,isLoading } = useQuery({
        queryKey: ['ManageFood'],
        queryFn: ManageFood,
    })

    // console.log(data.data)

    return (
        <div>
            <Helmet><title>  FOOD DONATION | MANAGE SINGLE FOOD</title></Helmet>
            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>

            <div className='p-20'>
                {
                    data?.data.map(item => <RequesterInformationcard key={item._id} isFetching={isFetching} isLoading={isLoading} fooditem ={item} refetch={refetch}  ></RequesterInformationcard>)
                }

            </div>

        </div>
    );
};

export default ManageSingleFoodPage;