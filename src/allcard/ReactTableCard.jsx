import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const ReactTableCard = ({ cardData, refetch }) => {

    const { _id,
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

    } = cardData




    const handeldeleted = (_id) => {
        axios.delete(`http://localhost:5000/FeaturedFoods/${_id}`)
            .then(res => {
                // console.log(res.data)

                if (res?.data?.deletedCount > 0) {
                    toast.success('deleted successfully')
                }
                refetch()
            })
    }


    
    return (
        <div className="overflow-x-auto" >
            <tbody className="table">
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={DonatorImage} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{DonatorName}</div>
                                <div className="text-sm ">{DonatorEmail}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                   
                    <th>
                        <button onClick={() => handeldeleted(_id)} className="btn btn-primary btn-xs">Delete</button>
                        <Link to={`/EditPage/${_id}`}> <button className="btn btn-primary btn-xs">edit</button></Link>
                        <Link to={'/manage/:id'}> <button className='btn btn-xs btn-primary'>Manage</button></Link>
                    </th>
                </tr>
            </tbody>
        </div>
    );
};

export default ReactTableCard;