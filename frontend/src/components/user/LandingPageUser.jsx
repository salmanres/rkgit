import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

function LandingPageUser() {
  return (
    <Fragment>
        <div className='navbar'>
            <Link to="/">HOME</Link>
            <Link to="/">ROOMS AND SUITES</Link>
            <Link to="/">MY BOOKINGS</Link>
            <Link to="/">DINING</Link>
            <Link to="/">GALLERY</Link>
            <Link to="/">CONTACT US</Link>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default LandingPageUser