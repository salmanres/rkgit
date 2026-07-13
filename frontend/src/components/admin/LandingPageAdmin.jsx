import React, { Fragment } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

// 1. default
// 2. name import

function LandingPageAdmin() {

    const token = Cookies.get('authToken');

    if (!token) {
        return <Navigate to="/admin/login" replace />
    }

    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin">ADMIN CONTROL PANEL</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link' to="/ADMIN">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/admin/bookings">BOOKINGS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/admin/rooms">ADD ROOM DATA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/admin/settings">ADD USER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <div className='navbar'>
                <Link to="/admin">HOME</Link>
                <Link to="/admin/bookings">BOOKINGS</Link>
                <Link to="/admin/rooms">ADD ROOMS</Link>
                <Link to="/admin/settings">SETTINGS</Link>
            </div> */}
            <Outlet />
        </Fragment>
    )
};

export default LandingPageAdmin;

