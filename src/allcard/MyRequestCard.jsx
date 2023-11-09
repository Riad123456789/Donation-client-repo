import axios from 'axios';
import toast from 'react-hot-toast';

const MyRequestCard = ({ myrequestData, refetch }) => {


    const {
        _id,
        FoodName,
        FoodImage,
        FoodId,
        DonatorName,
        DonatorImage,
        DonatorEmail,
        RequesterEmail,
        RequesterName,
        RequesterImage,
        ExpiredDate,
        FoodQuantity,
        PickupLocation,
        AdditionalNotes,
        DonationMoney,
        FoodStatus,
        RequestDate,
    } = myrequestData



    const handleCancel = (RequesterEmail) => {
        // console.log(DonatorEmail)

        axios.delete(`   https://y-hxh52ul9g-riads-projects-d9eea291.vercel.app//RequestFood/deleted/${RequesterEmail}`)
            .then(res => {
                console.log(res.data)

                if (res?.data?.deletedCount > 0) {
                    toast.success('deleted successfully')

                }
                refetch()
            })

    }




    return (
        <div className='p-10'>

            <div className="card lg:card-side bg-base-100 border shadow-xl">
                {/* <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">DonatorName: {DonatorName}</h2>
                    <p> <span className='text-lg font-semibold btn btn-xs '>Location</span> :{PickupLocation}</p>
                    <p> <span className='text-lg font-semibold btn btn-xs ' >ExpiredDate </span>:{ExpiredDate} days</p>
                    <p> <span className='text-lg font-semibold btn btn-xs '>RequestDate</span> :{RequestDate} </p>
                    <p><span className='text-lg font-semibold btn btn-xs '> FoodStatus</span> :{FoodStatus} </p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleCancel(RequesterEmail)} className='btn btn-secondary'>Cancel Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequestCard;