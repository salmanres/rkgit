import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MyBookingsUser() {

    const userinfo = JSON.parse(localStorage.getItem('userData'));

    const navigate = useNavigate();

    const [data, setdata] = useState();

    const getdata = async () => {
        try {
            if (userinfo) {
                const {mobile} = userinfo;
                const response = await axios.get(`http://localhost:3500/booking-by-mobile/${mobile}`);
                console.log(response.data);
            };
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(()=>{
        getdata();
    }, []);

    return (
        <Fragment>
            {
                userinfo ?
                    <p>user info</p>
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
        </Fragment>
    )
}

export default MyBookingsUser