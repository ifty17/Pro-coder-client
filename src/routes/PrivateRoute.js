import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return (
          <button className="btn loading btn-outline btn-success">
            loading
          </button>
        );
    }

    if(!user){
        return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;