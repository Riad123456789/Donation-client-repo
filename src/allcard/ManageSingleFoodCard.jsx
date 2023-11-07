import React from 'react';

const ManageSingleFoodCard = ({requestdata}) => {

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
    PickupLocation}=requestdata



    return (
        <div>
                        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{DonatorName}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                {/* <button className="btn btn-primary btn-xs">Delete</button>
                                <button className="btn btn-primary btn-xs"> edit </button> */}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageSingleFoodCard;