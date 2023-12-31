import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import img from "../assets/FS-logo-small-applications-RGB.jpg"


const Navbar = () => {

    const { LogOut, user } = useContext(AuthContext)

    const handleLogout = () => {
        LogOut()
            .then()
            .catch()

    }

    const NavLinks = <>

        <NavLink to={'/'}> <li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> Home</p></li></NavLink>
        <NavLink to={'/availablefoods'}><li className="hover:bg-lime-600 rounded-lg "> <p className="font-medium">Available Foods </p></li></NavLink>
        <NavLink to={'/addfood'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> Add Food</p></li></NavLink>
        <NavLink to={'/ManagefoodPage'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> Manage My Foods </p></li></NavLink>
        <NavLink to={'/Myfoodrequest'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> My Food Request</p></li></NavLink>
        <NavLink to={'/contact'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium">Contact</p></li></NavLink>
    </>


    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
               <img className='h-9 md:h-14' src={img} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">


{/* 
                {
                    user?.displayName ? <p className='  p-2 font-medium text-sm '>{user.displayName}</p> : <p></p>
                } */}


                {
                    user?.photoURL ? <div className="w-12 p-1 border rounded-full">
                        <img className='rounded-full' src={user.photoURL} />
                    </div>
                        :
                        <div className="w-10 rounded-full">
                        </div>
                }



                {

                    user ? <button onClick={handleLogout} className="btn btn-sm bg-emerald-800 text-white">sing out</button>
                        :
                        <button className="btn btn-sm bg-emerald-800"><Link to={"/login"}>login</Link></button>
                }

            </div>
           
        </div>
    );
};

export default Navbar;