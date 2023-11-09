import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';



const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);
    const Location = useLocation()


    if (loading) {
        return <span className="loading loading-spinner loading-md "></span>
    }

    // console.log( Location)

    if (user) {
        return children;
    }

    return <Navigate state={Location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;