import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';


const SingleFooddetailspage = () => {

    const data = useLoaderData()


    console.log(data)

    return (
        <div>

            <Navbar></Navbar>

            <Footer></Footer>
        </div>
    );
};

export default SingleFooddetailspage;