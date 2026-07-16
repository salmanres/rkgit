import React, { Fragment, useEffect } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize socket connection to backend server
const socket = io('http://localhost:3500');

function LandingPageAdmin() {

    const token = Cookies.get('authToken');
    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('authToken');
        navigate('/admin/login');
    }

    // Set up socket event listener for real-time notifications
    useEffect(() => {
        socket.on('newBookingNotification', (data) => {
            toast.info(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });

        // Cleanup connection listeners on component unmount
        return () => {
            socket.off('newBookingNotification');
        };
    }, []);

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
                                <Link className='nav-link' to="/admin">HOME</Link>
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
                            <li className="nav-item">
                                <Link className='nav-link' to="/admin/notes">NOTES</Link>
                            </li>
                        </ul>
                    </div>
                    <button className='btn btn-warning btn-sm' onClick={logout}>LogOut</button>
                </div>
            </nav>

            <Outlet />
            <ToastContainer />
        </Fragment>
    )
};

export default LandingPageAdmin;

