import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

function LandingPageUser() {
  return (
    <Fragment>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">DEMO PROJECT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/room-info">ROOMS AND SUITES</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/">MY BOOKINGS</Link>
              </li>
               <li className="nav-item">
                <Link className='nav-link' to="/">DINING</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/">GALLERY</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/register">LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className='navbar'>
            <Link to="/">HOME</Link>
            <Link to="/">ROOMS AND SUITES</Link>
            <Link to="/">MY BOOKINGS</Link>
            <Link to="/">DINING</Link>
            <Link to="/">GALLERY</Link>
            <Link to="/">CONTACT US</Link>
        </div> */}
      <Outlet />
    </Fragment>
  )
}

export default LandingPageUser