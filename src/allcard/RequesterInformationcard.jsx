import axios from 'axios';
import toast from 'react-hot-toast';

const RequesterInformationcard = ({ info, refetch }) => {

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
    } = info


    // console.log(FoodId)



    const handlestatas = (_id, FoodId) => {
        const ubdateFood = {
            FoodStatus: "deleverd",
        }
        fetch(`http://localhost:5000/RequestFood/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ubdateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    toast.success("successfully delivered")


                    if (data.modifiedCount > 0) {
                        axios.delete(`http://localhost:5000/FeaturedFoods/deleted/${FoodId}`)
                            .then(res => {
                                console.log(res.data)

                                if (res?.data?.deletedCount > 0) {
                                    toast.success('deleted successfully')
                                }

                            })
                    }



                }

                refetch()
            })


    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Food Status</th>
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
                                <button onClick={() => handlestatas(_id)} className="btn btn-primary btn-xs">{FoodStatus}</button>
                            </th>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default RequesterInformationcard;