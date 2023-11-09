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

        axios.delete(`http://localhost:5000/RequestFood/deleted/${RequesterEmail}`)
            .then(res => {
                console.log(res.data)

                if (res?.data?.deletedCount > 0) {
                    toast.success('deleted successfully')

                }
                refetch()
            })

    }




    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <h2 className="card-title">{DonationMoney} tk</h2>
                    <h2 className="card-title">{PickupLocation}</h2>
                    <h2 className="card-title">{ExpiredDate} days</h2>
                    <h2 className="card-title">{DonatorEmail}</h2>
                    {/* <h2 className="card-title">{RequesterEmail}</h2> */}
                    <h2 className="card-title">{RequestDate}</h2>
                    <h2 className="card-title">{FoodStatus}</h2>


                  
                </div>
            </div>





            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">DonatorName: {DonatorName}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => handleCancel(RequesterEmail)} className='btn btn-primary'>Cancel Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequestCard;