import React, {  use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading) {
      return  <span className="loading loading-infinity loading-xl"></span>
    }
   else if(!user){
        return <Navigate to="/login" state={{ from: location.pathname }} replace ></Navigate>
    }

    return children;
    
};

export default PrivetRoutes;