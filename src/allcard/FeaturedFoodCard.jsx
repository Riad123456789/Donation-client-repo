import React from 'react';

const FeaturedFoodCard = ({ FooData }) => {


   const {food_name}=FooData

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <button className='btn btn-primary'>View Detail</button>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;