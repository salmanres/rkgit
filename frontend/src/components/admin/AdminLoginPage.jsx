import React, { Fragment, useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {

    const [data, setdata] = useState();
    const navigate = useNavigate();

    const getdata = (event) => {
        setdata({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://rkgit.onrender.com/login-user', data);
            console.log(response.data);
            alert(response.data.message);
            navigate('/admin');
            Cookies.set('authToken', response.data.token, { expires: 1 });
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <Fragment>
            <h3 className='bg-warning p-3 text-center'>
                ADMIN LOGIN PAGE
            </h3>
            <div className='container mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-4'>
                        <input className='form-control mb-2' type='email' placeholder='enter email' name='email' onInput={getdata} />
                        <input className='form-control mb-2' type='password' placeholder='enter password' name='password' onInput={getdata} />
                        <button className='btn btn-warning w-100' onClick={handleLogin}>LOGIN</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminLoginPage