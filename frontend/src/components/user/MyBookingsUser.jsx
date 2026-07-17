import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function MyBookingsUser() {

    const userinfo = JSON.parse(localStorage.getItem('userData'));
    const count = useSelector((state) => state.counter.value);

    const navigate = useNavigate();

    const [data, setdata] = useState();

    const getdata = async () => {
        try {
            if (userinfo) {
                const { mobile } = userinfo;
                const response = await axios.get(`http://localhost:3500/booking-by-mobile/${mobile}`);
                console.log(response.data);
                setdata(response.data);
            };
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            {
                userinfo ?
                    <div>
                        <h1>{count}</h1>
                        {
                            data && data.map((item) => (
                                <div className="card m-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.category}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{item.name} - {item.mobile}</h6>
                                        <p className="card-text">Checkin - {item.checkin} | Checkout - {item.checkout}</p>
                                        <p>Guest Count: {item.guestcount}</p>
                                        <button className='btn btn-danger' onClick={() => toast.error('cancellation not available!')}>Cancel Booking</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-5 mt-5 login-container'>
                                <h4>Please Login to get bookings information</h4>
                                <button className='btn btn-warning mt-3' onClick={() => navigate('/register')}>login</button>
                            </div>
                        </div>
                    </div>

            }

            <ToastContainer />
        </Fragment>
    )
}

export default MyBookingsUser