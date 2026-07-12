import axios from 'axios';
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AdminHomePage() {

    const [data, setdata] = useState();
    const navigate = useNavigate();

    const getdata = async () => {
        const token = Cookies.get('authToken');
        try {
            const response = await axios.get('https://rkgit.onrender.com/get-room', {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            });
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    const deleteroom = async (id) => {
        try{
            const response = await axios.delete(`https://rkgit.onrender.com/delete-room/${id}`);
            alert(response.data);
            getdata();
        }catch(err){
            console.log(err);
        };
    };

    const editroom = (id) => {
        navigate(`//admin/edit-rooms/${id}`);
    }


    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>

            <table border={1} cellSpacing={0} className='mytable'>
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
                                    <button onClick={()=>editroom(item._id)}><FaEdit /></button>
                                    <button onClick={()=>deleteroom(item._id)}><MdDelete /></button>
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