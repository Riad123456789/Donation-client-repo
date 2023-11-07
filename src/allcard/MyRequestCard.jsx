import React from 'react';

const MyRequestCard = ({ myrequestData, refetch }) => {


    const {

        notes,
        money,
        foodName,
        foodImage,
        DonatorName,
        DonatorImage,
        DonatorEmail,
        ExpiredDate,
        FoodQuantity,
        PickupLocation
    } = myrequestData

    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{DonatorEmail}</h2>
                   <button className='btn btn-primary'>Cancel Request</button>
                </div>
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default MyRequestCard;