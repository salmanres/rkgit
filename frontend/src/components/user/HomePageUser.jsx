import axios from 'axios';
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HomePageUser() {

    const [data, setdata] = useState();

    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:3500/get-room');
            console.log(response.data);
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <img className='banner' src='https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/5ae3737bb54d4d94ca61a0f7518dced11b781c4b-921x660.jpg?w=1280&auto=format&dpr=2' alt="banner" />

            <h1 className='myheading'>OUR BEST ROOMS</h1>

            <div className='card-container'>
                {data && data.map((item) => (
                    <div>
                        <img src={item.image} alt="img" />
                        <h3>{item.category}</h3>
                        <label>Capacity : {item.capacity}</label>
                        <label style={{float:"right"}}>price : {item.price}</label>
                    </div>
                ))}
            </div>

        </Fragment>
    )
}

export default HomePageUser