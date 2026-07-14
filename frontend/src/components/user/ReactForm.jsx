import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ReactForm() {

    const [data, setdata] = useState();
    const navigate = useNavigate();

    const getData = (event) => {
        setdata({
            ...data,
            [event.target.name]:event.target.value
        });
        console.log(data);
    };

    const addmobileuser = async () => {
        try{
            const response = await axios.post('http://localhost:3500/add-mobile-user', data);
            console.log(response);
            if(response.status === 200){
                alert('login successful');
                localStorage.setItem('userData', JSON.stringify(data));
                navigate(-1);
            }else{
                alert('invalid username/password');
            };
        }catch(err){
            console.log(err);
        };
    };

    return (
        <Fragment>
            <div className='container'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-lg-5'>
                        <input className='form-control mb-3 ' type='text' placeholder='Enter Name' name='name' onInput={getData} />
                        <input className='form-control mb-3' type='number' placeholder='Enter Mobile' name='mobile' onInput={getData} />
                        <input className='form-control mb-3' type='password' placeholder='Enter password' name='password' onInput={getData} />
                        <button className='btn btn-warning w-100' onClick={addmobileuser}>Login</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ReactForm