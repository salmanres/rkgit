import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

function AdminRooms() {

    const [data, setdata] = useState();

    const [file, setFile] = useState();

    // spread operator

    const getData = (event) => {
        setdata(
            {
                ...data,
                [event.target.name]: event.target.value
            }
        );
        console.log(data);
    };

    const getFile = (event) => {
        setFile(event.target.file[0]);
    };

    const addroom = async () => {
        try {
            const formdata = new FormData();
            formdata.append('category', data.category);
            formdata.append('capacity', data.capacity);
            formdata.append('price', data.price);
            formdata.append('description', data.description);

            if (file) {
                formdata.append('image', file);
            };

            const response = await axios.post('http://localhost:3500/add-room', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data);
        } catch (err) {
            alert('internal server error')
        }
    }

    useEffect(() => {
        console.log(Date.now());
    }, [])

    return (
        <Fragment>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className='form-container'>
                    <h2>ADD ROOMS DETAILS</h2>
                    <div className='px-2'>
                        <input className='form-control mb-2' type='text' placeholder='Category' name="category" onInput={getData} />
                        <input className='form-control mb-2' type='number' placeholder='Capacity' name="capacity" onInput={getData} />
                        <input className='form-control mb-2' type='number' placeholder='Price' name='price' onInput={getData} />
                        <input className='form-control mb-2' type='text' placeholder='description' name='description' onInput={getData} />
                        <input className='form-control mb-2' type='file' onInput={getFile} />
                        <button className='btn btn-warning w-100 mb-2' onClick={addroom}>ADD ROOM</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminRooms