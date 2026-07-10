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
            const response = await axios.post('http://localhost:3500/login-user', data);
            console.log(response.data);
            alert(response.data.message);
            navigate('/admin');
            Cookies.set('authToken', response.data.token, {expires:1});
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <Fragment>
            <input type='email' placeholder='enter email' name='email' onInput={getdata} />
            <input type='password' placeholder='enter password' name='password' onInput={getdata} />
            <button onClick={handleLogin}>login</button>
        </Fragment>
    )
}

export default AdminLoginPage