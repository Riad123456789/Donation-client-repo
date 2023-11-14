import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import moment from 'moment';
import { Helmet } from 'react-helmet-async';

const SingleFooddetailspage = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    const singleData = useLoaderData()

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
    } = singleData

    // console.log(singleData, DonatorEmail)

    const handlerequest = (e) => {
        e.preventDefault()
        const form = e.target

        const DonationMoney = parseInt(form.DonationMoney.value)
        const RequestDate = moment().subtract(10, 'days').calendar()



        // console.log(notes, money, foodName, DonatorName, PickupLocation)

        const requestFood = {

            FoodName: foodName,
            FoodImage: foodImage,
            FoodId: _id,
            DonatorName: DonatorName,
            DonatorEmail: DonatorEmail,
            RequesterEmail: (user?.email),
            RequesterImage: (user?.photoURL),
            RequesterName: (user?.displayName),
            ExpiredDate: ExpiredDate,
            FoodQuantity: FoodQuantity,
            PickupLocation: PickupLocation,
            AdditionalNotes: AdditionalNotes,
            DonationMoney: DonationMoney,
            FoodStatus: FoodStatus,
            RequestDate: RequestDate,

        }

        fetch('https://y-roan-one.vercel.app/RequestFood', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Request success")
                }
            })
    }




    return (
        <div>
            <Helmet><title>  FOOD DONATION | SINGLE FOOD</title></Helmet>
            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className="card w-[700px] mx-auto m-9 bg-base-100 shadow-xl">



                <figure><img className="w-96 h-60" src={foodImage} alt="" /></figure>
                <div className="avatar">
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        Food Name : {foodName}
                        <div className="badge badge-secondary">Donator Name: {DonatorName}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Exper date : {ExpiredDate} days</div>
                        <div className="badge badge-outline"> Location:{PickupLocation}</div>
                        <div className="badge badge-outline">{FoodQuantity} people</div>
                        <div className="p-3">Additional Notes : {AdditionalNotes}</div>
                    </div>







                    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Request Button</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box max-w-5xl">

                            <form onSubmit={handlerequest}>
                                <div>
                                    <label defaultValue={AdditionalNotes} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes:</label>
                                    <input type="text" name="notes" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={AdditionalNotes} required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donation Money:</label>
                                    <input type="number" name="DonationMoney" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Money :" required="" />
                                </div>
                                <button type='submit' className='btn btn-primary'>request</button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">

                                    <button type='submit' className="btn">close</button>

                                </form>
                            </div>
                        </div>
                    </dialog>





                </div>
            </div>

        </div>
    );
};

export default SingleFooddetailspage;