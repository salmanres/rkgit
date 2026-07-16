import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

function AdminBookings() {

  const [data, setdata] = useState();

  const getdata = async () => {
    try {
      const response = await axios.get('http://localhost:3500/all-bookings');
      console.log(response.data);
      setdata(response.data);
    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    getdata();
  }, [])

  return (
    <Fragment>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>CheckIn</th>
            <th>CheckOut</th>
            <th>Guest Count</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.checkin}</td>
                <td>{item.checkout}</td>
                <td>{item.guestcount}</td>
                <td>{item.category}</td>
                <td>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Fragment >
  )
}

export default AdminBookings