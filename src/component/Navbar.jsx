import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {



    const NavLinks = <>

        <NavLink to={'/'}> <li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> Home</p></li></NavLink>
        <NavLink to={'/add products'}><li className="hover:bg-lime-600 rounded-lg "> <p className="font-medium">Available Foods </p></li></NavLink>
        <NavLink to={'/My Cart'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> Add Food</p></li></NavLink>
        <NavLink to={'/My Cart'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> Manage My Foods </p></li></NavLink>
        <NavLink to={'/My Cart'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium"> My Food Request</p></li></NavLink>
        <NavLink to={'/contact'}><li className="hover:bg-lime-600 rounded-lg "><p className="font-medium">Contact</p></li></NavLink>
    </>


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {NavLinks}
                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {NavLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn btn-sm"><Link to={"/login"}>login</Link></a>
        </div>
    </div>
    );
};

export default Navbar;