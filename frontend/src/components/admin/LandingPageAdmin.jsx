import React, { Fragment } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

// 1. default
// 2. name import

function LandingPageAdmin(){

    const token = Cookies.get('authToken');

    if(!token){
        return <Navigate to="/admin/login" replace />
    }

    return(
        <Fragment>
            <div className='navbar'>
                <Link to="/admin">HOME</Link>
                <Link to="/admin/bookings">BOOKINGS</Link>
                <Link to="/admin/rooms">ADD ROOMS</Link>
                <Link to="/admin/settings">SETTINGS</Link>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default LandingPageAdmin;

