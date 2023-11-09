import axios from 'axios';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import RequesterInformationcard from '../allcard/RequesterInformationcard';
import { Helmet } from 'react-helmet-async';


const ManageSingleFoodPage = () => {

    const requestdata = useLoaderData()

    const {
        _id,
        FoodName,
        FoodImage,
        FoodId,
        DonatorName,
        DonatorEmail,
        RequesterEmail,
        RequesterImage,
        RequesterName,
        ExpiredDate,
        FoodQuantity,
        PickupLocation,
        AdditionalNotes,
        DonationMoney,
        FoodStatus,
        RequestDate,

    } = requestdata



    const ManageFood = async () => {
        const res = await axios.get(`http://localhost:5000/requestedFoodd/${FoodName}`)
        return res;
    }
    const { data, refetch } = useQuery({
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
                    data?.data.map(item => <RequesterInformationcard key={item._id} info={item} refetch={refetch}  ></RequesterInformationcard>)
                }

            </div>

        </div>
    );
};

export default ManageSingleFoodPage;