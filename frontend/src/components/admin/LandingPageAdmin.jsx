import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';

// 1. default
// 2. name import

function LandingPageAdmin(){

    return(
        <Fragment>
            <div className='navbar'>
                <Link to="/admin">HOME</Link>
                <Link to="/admin/bookings">BOOKINGS</Link>
                <Link to="/admin/rooms">ADD ROOMS</Link>
                <Link to="/admin">SETTINGS</Link>
            </div>
            <Outlet />
        </Fragment>
    )

};

export default LandingPageAdmin;

