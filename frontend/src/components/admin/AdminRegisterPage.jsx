import axios from 'axios';
import React, { Fragment, useState } from 'react'

function AdminRegisterPage() {

    const [data, setdata] = useState();

    const getdata = (event) => {
        setdata({
            ...data,
            [event.target.name]:event.target.value
        });
        console.log(data);
    };

    const adduser = async () => {
        try{
            const response = await axios.post('https://rkgit.onrender.com/add-user', data);
            alert(response.data);
        }catch(err){
            console.log(err);
        };
    };

  return (
    <Fragment>
        <input type='text' placeholder='username' name='username' onInput={getdata} />
        <input type='email' placeholder='enter email' name='email' onInput={getdata} />
        <input type='password' placeholder='enter password' name='password' onInput={getdata} />
        <button onClick={adduser}>add user</button>
    </Fragment>
  )
}

export default AdminRegisterPage