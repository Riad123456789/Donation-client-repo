import axios from 'axios';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import RequesterInformationcard from '../allcard/RequesterInformationcard';


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
            <Navbar></Navbar>

            {
                data?.data.map(item => <RequesterInformationcard key={item._id} info={item} refetch={refetch}  ></RequesterInformationcard>)
            }

            <Footer></Footer>
        </div>
    );
};

export default ManageSingleFoodPage;