
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';


const MainLayout = () => {
    return (


        <div className=' mx-auto'>

           
            <div className=" w-full h-10 bg-teal-500">
            </div>

            <div className=''>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;