import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Privider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}


export default PrivateRoute;