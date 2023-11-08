import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import useAxios from '../hookes/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ReactTableCard from '../allcard/ReactTableCard';


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
            <Navbar></Navbar>


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
                        <div>
                            {
                                data?.data.map(item => <ReactTableCard key={item._id} refetch={refetch} cardData={item} ></ReactTableCard>)
                            }
                        </div>
                    </tbody>
                </table>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManagefoodPage;