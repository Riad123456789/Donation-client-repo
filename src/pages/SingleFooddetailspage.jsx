import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';


const SingleFooddetailspage = () => {

    const singleData = useLoaderData()

    const { foodName, DonatorName, PickupLocation, AdditionalNotes } = singleData

    // console.log(singleData)

    const handlerequest = (e) => {
        e.preventDefault()
        const form = e.target

        const notes = form.notes.value
        const money = form.money.value

        // console.log(notes, money, foodName, DonatorName, PickupLocation)

        const requestFood = { notes, money, foodName, DonatorName, PickupLocation }

        fetch('http://localhost:5000/RequestFood', {
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

            <Navbar></Navbar>
            <div className="card w-96 mx-auto m-9 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {foodName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{DonatorName}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{PickupLocation}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>


                    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Request Button</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box max-w-5xl">

                            <form onSubmit={handlerequest}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes:</label>
                                    <input type="text" name="notes" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={AdditionalNotes} required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donation Money:</label>
                                    <input type="number" name="money" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Money :" required="" />
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
            <Footer></Footer>
        </div>
    );
};

export default SingleFooddetailspage;