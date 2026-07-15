import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function RoomsInfo() {

    const [data, setdata] = useState();
    const userInfo = localStorage.getItem('userData');
    const navigate = useNavigate();

    const [bookingdata, setbookingdata] = useState();
    const userdata = JSON.parse(localStorage.getItem('userData'));
    console.log(userdata);

    const roomsdata = async () => {
        try {
            const response = await axios.get('http://localhost:3500/get-room');
            console.log(response.data);
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    const getdata = (event) => {
        setbookingdata({
            ...bookingdata,
            [event.target.name]: event.target.value
        });
        console.log(bookingdata);
    };


    const createbooking = async () => {
        try {
            const comletedata = bookingdata;
            comletedata.mobile = userdata.mobile;
            comletedata.name = userdata.name;
            console.log(comletedata);

            const response = await axios.post('http://localhost:3500/create-booking', comletedata);
            toast.success(response.data);

        } catch (e) {
            console.log(e);
        };
    };

    useEffect(() => {
        roomsdata();
    }, [])

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row mt-4 mb-4'>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>Checkin Date</label>
                        <input className='form-control' type='date' name='checkin' onInput={getdata} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>CheckOut Date</label>
                        <input className='form-control' type='date' name='checkout' onInput={getdata} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>Guests</label>
                        <input className='form-control' type='number' placeholder='No of guests' name='guestcount' onInput={getdata} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>Select Category</label>
                        <select className='form-control' name='category' onInput={getdata}>
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                            <option>Category 4</option>
                        </select>
                    </div>
                    <div className='col-xl-12 booking-form mt-4'>

                        {
                            userInfo ?
                                <button type="button" class="btn btn-warning" style={{ width: '200px' }} onClick={createbooking}>BOOK NOW</button>
                                :
                                <button class="btn btn-warning" style={{ width: '200px' }} onClick={() => navigate('/register')}>LOGIN</button>
                        }




                    </div>
                </div>
            </div>


            {
                data && data.map((item) => (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`http://localhost:3500${item.image}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.category}</h5>
                                    <h5 className="card-title">Capacity : {item.capacity}</h5>
                                    <h4 className="card-title">Capacity : Price : ₹{item.price}</h4>
                                    <p className="card-text">Aminities: {item.description}</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
            <ToastContainer />
        </Fragment>
    )
}

export default RoomsInfo