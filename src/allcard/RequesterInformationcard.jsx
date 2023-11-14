import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

const RequesterInformationcard = ({ fooditem, refetch, isFetching, isLoading }) => {



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
    } = fooditem


    // console.log(fooditem)


    const handleStatus = (FoodId) => {
        const updateFood = {
            FoodStatus: "delivered",
        }
        fetch(`https://y-roan-one.vercel.app/FeaturedFoods/${FoodId}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    toast.success("Successfully delivered")
                }


                refetch()

            });

    }

    if (isLoading || isFetching) {
        return <p>Loading.......</p>
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Food Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={RequesterImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{RequesterEmail}</div>
                                        <div className="text-sm">{RequesterName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                                <span className="badge badge-ghost badge-sm">{RequestDate}</span>
                            </td>

                            <th>
                                <button onClick={() => handleStatus(FoodId)} className="btn btn-primary btn-xs">{FoodStatus}</button>
                            </th>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default RequesterInformationcard;