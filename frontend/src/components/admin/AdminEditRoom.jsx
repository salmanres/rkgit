import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AdminEditRoom() {

    const { id } = useParams();
    const [data, setdata] = useState();
    const navigate = useNavigate();

    const roombyid = async () => {
        try {
            const response = await axios.get(`http://localhost:3500/roombyid/${id}`);
            console.log(response.data);
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    const updateroom = async (req, res) => {
        try {
            const response = await axios.put(`http://localhost:3500/update-room/${id}`, data);
            alert(response.data);
            navigate('/admin');
        } catch (err) {
            console.log(err);
        };
    };

    const getdata = (event) => {
        setdata({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data);
    };

    useEffect(() => {
        roombyid();
    }, []);

    return (
        <Fragment>
            <div className='edit-container'>
                {data ?
                    <div>
                        <img src={data.image} />
                        <input type='text' placeholder='category' value={data.category} name='category' onInput={getdata} />
                        <input type='number' placeholder='capacity' value={data.capacity} name='capacity' onInput={getdata} />
                        <input type='number' placeholder='price' value={data.price} name='price' onInput={getdata} />
                        <input type='text' placeholder='imgae' value={data.image} name='imgae' onInput={getdata} />
                        <button onClick={updateroom}>UPDATE</button>
                    </div>
                    :
                    <p>loading....</p>
                }
            </div>

        </Fragment>
    )
}

export default AdminEditRoom