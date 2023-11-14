/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const AvailableFoodCard = ({ AvailableFoodData }) => {
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

    } = AvailableFoodData


    // console.log(AvailableFoodData)
    return (

        <div className="border relative ">
            <figure><img className="w-96 mx-auto h-60" src={foodImage} alt="" /></figure>

            <div className="card-body  ">
                <h2 className="card-title">
                    <span className=' text-lg text-red-600 rounded-md'> Food Name</span>: {foodName}

                </h2>

                <div className="avatar absolute right-9  ml-8">
                    <div className="w-12 rounded-full">
                        <img className='top-0' src={DonatorImage} />
                    </div>
                </div>
                <div className=""> <span className='font-medium'>Donator Name </span>: {DonatorName}</div>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline"> <span className='text-orange-700 font-medium'>Expired Date </span> : {ExpiredDate} days</div>
                    <div className="badge badge-outline"> <span className='font-medium text-amber-600'>Pickup Location </span> : {PickupLocation}</div>
                    <div className="badge badge-outline"><span className='font-medium text-lime-700'> Food Quantity </span> : {FoodQuantity} people</div>
                    <div className="badge badge-outline"><span className='font-medium text-lime-700'> FoodStatus</span> : {FoodStatus}</div>

                </div>
                <Link to={`/SingleFooddetails/${_id}`}><button className='btn btn-sm bg-red-600 text-white shadow-xl'>View Detail </button></Link>
            </div>
        </div>

    );
};

export default AvailableFoodCard;