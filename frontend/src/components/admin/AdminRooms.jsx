import React, { Fragment } from 'react'
import { useState } from 'react'
import axios from 'axios';

function AdminRooms() {

    const [data, setdata] = useState();

    // spread operator

    const getData = (event) => {
        setdata(
            {
                ...data,
                [event.target.name]:event.target.value
            }
        );
        console.log(data);
    };

    const addroom = async () => {
        try{
            const response = await axios.post('http://localhost:3500/add-room', data);
            alert(response.data);
        }catch(err){
            alert('internal server error')
        }
    }

    return (
        <Fragment>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className='form-container'>
                    <h2>ADD ROOMS DETAILS</h2>
                    <input type='text' placeholder='Category' name="category" onInput={getData} />
                    <input type='text' placeholder='Capacity' name="capacity" onInput={getData}/>
                    <input type='number' placeholder='Price' name='price' onInput={getData}/>
                    <button onClick={addroom}>ADD ROOM</button>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminRooms