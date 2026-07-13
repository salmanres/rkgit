import axios from 'axios';
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HomePageUser() {

    const [data, setdata] = useState();

    const getdata = async () => {
        try {
            const response = await axios.get('https://rkgit.onrender.com/get-room');
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

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/7861c900ca889b3adf9fdeb292e6da2f8871a743-3840x1860.jpg?w=1280&auto=format&dpr=2" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/70af543590eec40d6a6d82bfa2393704c6ff0eb3-3840x1860.jpg?w=1280&auto=format&dpr=2" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/a7792fc3db56d5695d73346d5e919fd9a577ad6e-1920x930.heif?w=1280&auto=format&dpr=2" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container-fluid'>
                <div className='row mt-4 mb-4'>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>Checkin Date</label>
                        <input className='form-control' type='date' />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>CheckOut Date</label>
                        <input className='form-control' type='date' />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>Guests</label>
                        <input className='form-control' type='number' placeholder='No of guests' />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 booking-form'>
                        <label className='mb-3'>Select Category</label>
                        <select className='form-control'>
                            <option>Suite</option>
                            <option>Deluxe</option>
                            <option>King</option>
                            <option>Standard</option>
                        </select>
                    </div>
                    <div className='col-xl-12 booking-form mt-4'>
                        <button type="button" class="btn btn-warning" style={{ width: '200px' }}>BOOK NOW</button>
                    </div>
                </div>

                <div className='row'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/659bf896fc962eb6ca0221690a45e7d649a8dd0c-1720x1112.jpg?w=1280&auto=format&dpr=2" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ELEGANCE BEYOND COMPARE</h5>
                                    <p className="card-text">The only ‘palace’ hotel in the national capital since 1983, in close proximity to the airport, embassies and business district, Taj Palace, New Delhi has been home to world leaders and captains of industry. Our boomerang-shaped luxury hotel in Delhi is spread over six acres of verdant greenery and balances modern interiors with regional art to create a luxurious ambience. With sustainability</p>
                                    <p className="card-text">The only ‘palace’ hotel in the national capital since 1983, in close proximity to the airport, embassies and business district, Taj Palace, New Delhi has been home to world leaders and captains of industry</p>
                                    <p className="card-text"><small className="text-body-secondary">Explore more</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <h1 className='myheading'>Our Gallery</h1>

            <div className='cotnainer'>
                <div className='row'>
                    <div className="col-lg-3 col-md-6 col-sm-12 card p-0 ">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/51a4d4bd19f512f51baa8e20c1a9200d9bef826a-3365x3565.jpg?w=480&auto=format&dpr=2" className="col-lg-3 card-img-top" alt="..." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card p-0">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/10425a90e22e1d5f79aaeaf3c2c32b6994466131-3363x3562.jpg?w=480&auto=format&dpr=2" className="col-lg-3 card-img-top" alt="..." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card p-0 ">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/a14590da2cd47150e83af69d3a3ba8177c20e09b-912x966.jpg?w=480&auto=format&dpr=2" className="col-lg-3 card-img-top" alt="..." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card p-0">
                        <img src="https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/58f916d7781299f9f42a47310f0bfb2dce3822be-912x966.jpg?w=480&auto=format&dpr=2" className="col-lg-3 card-img-top" alt="..." />
                    </div>
                </div>
            </div>



            {/* <div className='card-container'>
                {data && data.map((item) => (
                    <div>
                        <img src={item.image} alt="img" />
                        <h3>{item.category}</h3>
                        <label>Capacity : {item.capacity}</label>
                        <label style={{ float: "right" }}>price : {item.price}</label>
                    </div>
                ))}
            </div> */}

        </Fragment>
    )
}

export default HomePageUser