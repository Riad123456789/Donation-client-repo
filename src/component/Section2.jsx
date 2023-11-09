import img1 from '../assets/food-donation-scaled-1.jpeg'
const Section2 = () => {
    return (
        <div className='flex'>
            <div className="flex-1 flex justify-end items-center   text-center">
              <div className=' p-7'>
              <p className="font-bold text-3xl text-red-700 ">Lorem ipsum dolor sit amet consecteturt. </p>
                <p className='mt-3 text-amber-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dignissimos delectus est fugiat quas architecto </p>
              </div>
            </div>
            <div className="flex-1 flex  justify-end" >
                <img className="h-80 border p-2 " src={img1} alt="" />
            </div>
        </div>
    );
};

export default Section2;