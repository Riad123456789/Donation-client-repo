import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
// import { CompactTable } from '@table-library/react-table-library/compact';
import useAxios from '../hookes/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ReactTableCard from '../allcard/ReactTableCard';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const ManagefoodPage = () => {


    const { user } = useContext(AuthContext)

    // console.log(user)

    const axios = useAxios()

    const ManageFood = async () => {
        const res = await axios.get(`/AddFood?DonatorEmail=${user?.email}`)
        return res;
    }


    const { data, isLoading, refetch } = useQuery({
        queryKey: ['ManageFood'],
        queryFn: ManageFood,
    })

    // console.log(data?.data)



    if (isLoading) {
        return <p>loading....</p>
    }




    // const nodes = [
    //     {
    //         id: '0',
    //         name: 'Shopping List',
    //         deadline: new Date(2020, 1, 15),
    //         type: 'TASK',
    //         isComplete: true,
    //         nodes: 3,
    //     },
    // ];

    // const COLUMNS = [
    //     { label: 'Task', renderCell: (item) => item.name },
    //     {
    //         label: 'Deadline',
    //         renderCell: (item) =>
    //             item.deadline.toLocaleDateString('en-US', {
    //                 year: 'numeric',
    //                 month: '2-digit',
    //                 day: '2-digit',
    //             }),
    //     },
    //     { label: 'Type', renderCell: (item) => item.type },
    //     {
    //         label: 'Complete',
    //         renderCell: (item) => item.isComplete.toString(),
    //     },
    //     { label: 'Tasks', renderCell: (item) => item.nodes },
    // ];



    // const data = { nodes };

    return (
        <div>
            <Navbar></Navbar>
            {/* <div>
                <CompactTable columns={COLUMNS} data={data} />;
            </div> */}

            <div>
                {
                    data?.data.map(item => <ReactTableCard key={item._id} refetch={refetch} cardData={item} ></ReactTableCard>)
                }
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default ManagefoodPage;