import ManageSingleFoodCard from '../allcard/ManageSingleFoodCard';
import Navbar from '../component/Navbar';
import { useLoaderData } from 'react-router-dom';

const ManageSingleFoodPage = () => {

const loddata =useLoaderData()

// console.log(loddata)

    return (
        <div>
            <Navbar></Navbar>

            <div>
                {
                    loddata?.map (item => <ManageSingleFoodCard key={item._d} requestdata={item} ></ManageSingleFoodCard>  )
                }
            </div>
        </div>
    );
};

export default ManageSingleFoodPage;