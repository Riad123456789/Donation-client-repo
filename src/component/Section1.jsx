// import {  } from "@react-icons/all-files/fa/FaBeer";
import img from '../assets/corporate-team-icon-thin-circle-stencil-design-vector-illustration-147893267.webp'
import img1 from '../assets/man-riding-scooter-delivery-logo-260nw-1849033798.webp'
import img2 from '../assets/png-transparent-computer-icons-guarantee-garanty-label-logo-quality.png'
import img3 from '../assets/360_F_510888200_EentlrpDCeyf2L5FZEeSfgYaeiZ80qAU.jpg'
import img4 from '../assets/best-offer-logo-simple-illustration-of-best-offer-vector-logo-for-web-R1FFXT.jpg'


const Section1 = () => {
    return (
        <div className='mb-20'>
            <div className="text-center space-y-4">
                <p className="font-bold text-xl text-yellow-400">Our Features</p>
                <h1 className="font-bold text-3xl">We try our Best services</h1>
                <p className="md:w-1/2 mx-auto text-sm text-emerald-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable</p>
            </div>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-6 mt-8'>

                <div className=' border  rounded-lg mx-auto p-4'>
                    <div className='space-y-3'>
                        <img className=' w-[47px] mx-auto' src={img} alt="" />
                        <p className='text-center font-medium'>Expert Team</p>
                    </div>
                </div>
                <div className=' border  rounded-lg mx-auto p-4'>
                    <div className='space-y-2'>
                        <img className=' w-[40px] mx-auto' src={img1} alt="" />
                        <p className='text-center font-medium'>Timely Delivery</p>
                    </div>
                </div>
                <div className=' border  rounded-lg mx-auto p-4'>
                    <div className='space-y-3'>
                        <img className=' w-[47px] mx-auto bg-black rounded-full' src={img3} alt="" />
                        <p className='text-center font-medium'>24/7 Support</p>
                    </div>
                </div>
                <div className=' border  rounded-lg mx-auto p-4'>
                    <div className='space-y-4'>
                        <img className=' w-[52px] mx-auto' src={img2} alt="" />
                        <p className='text-center font-medium'>Best food</p>
                    </div>
                </div>
                <div className=' border  rounded-lg mx-auto p-4'>
                    <div className='space-y-4'>
                        <img className=' w-[50px] mx-auto' src={img4} alt="" />
                        <p className='text-center font-medium'>100% Guranty</p>
                    </div>
                </div>
                <div className=' border  rounded-lg mx-auto p-4'>
                    <div className='space-y-2'>
                        <img className=' w-[44px] mx-auto' src={img1} alt="" />
                        <p className='text-center font-medium'>Timely Delivery</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Section1;