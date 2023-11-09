import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import useAxios from '../hookes/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ReactTableCard from '../allcard/ReactTableCard';
import { Helmet } from 'react-helmet-async';


const ManagefoodPage = () => {

    const { user } = useContext(AuthContext)
    const axios = useAxios()

    const ManageFood = async () => {
        const res = await axios.get(`/AddFood?DonatorEmail=${user.email}`)
        return res;
    }

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['ManageFood'],
        queryFn: ManageFood,
    })


    return (
        <div>
            <Helmet><title>  FOOD DONATION | MANAGE FOOD</title></Helmet>
            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>


            <div className=" mx-auto  p-28 border">
                <table className="table">
                    {/* head */}
                    <thead>
                        {/* <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr> */}
                    </thead>
                    <tbody>
                        <div>
                            {
                                data?.data.map(item => <ReactTableCard key={item._id} refetch={refetch} cardData={item} ></ReactTableCard>)
                            }
                        </div>
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default ManagefoodPage;