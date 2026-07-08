import axios from 'axios';
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AdminHomePage() {

    const [data, setdata] = useState();

    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:3500/get-room');
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

            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>SR</th>
                        <th>CATEGORY</th>
                        <th>CAPACITY</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.category}</td>
                                <td>{item.capacity}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button><FaEdit /></button>
                                    <button><MdDelete /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </Fragment>
    )
}

export default AdminHomePage