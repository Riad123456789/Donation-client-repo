import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import AvailableFoodCard from '../allcard/AvailableFoodCard';

const AvailableFoodsPage = () => {

    const AvailableFoodData = useLoaderData()
    console.log(AvailableFoodData)


    return (
        <div>
            <Navbar></Navbar>
            <div className='grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>

                {
                    AvailableFoodData?.map(data => <AvailableFoodCard key={data._id} AvailableFoodData ={data} ></AvailableFoodCard>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AvailableFoodsPage;