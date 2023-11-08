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
        <div className="card mx-auto bg-base-100 shadow-xl">
            <figure><img className="w-80 h-60" src={foodImage} alt="" /></figure>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={DonatorImage} />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                    <div className="badge badge-secondary">{DonatorName}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{ExpiredDate} days</div>
                    <div className="badge badge-outline">{PickupLocation}</div>
                    <div className="badge badge-outline">{FoodQuantity} people</div>
                    <div className="badge badge-outline">{AdditionalNotes}</div>
                </div>
                <Link to={`/SingleFooddetails/${_id}`}> <button className='btn btn-primary'>View Detail</button></Link>
            </div>
        </div>
    );
};

export default AvailableFoodCard;