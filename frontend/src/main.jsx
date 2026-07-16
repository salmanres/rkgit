import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'
import LandingPageAdmin from './components/admin/LandingPageAdmin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from './components/admin/AdminHomePage.jsx';
// import AdminBookings from './components/admin/AdminBookings.jsx';
import AdminRooms from './components/admin/AdminRooms.jsx';
import LandingPageUser from './components/user/LandingPageUser.jsx';
import HomePageUser from './components/user/HomePageUser.jsx';
import AdminEditRoom from './components/admin/AdminEditRoom.jsx';
import AdminRegisterPage from './components/admin/AdminRegisterPage.jsx';
import AdminLoginPage from './components/admin/AdminLoginPage.jsx';
import ReactForm from './components/user/ReactForm.jsx';
import RoomsInfo from './components/user/RoomsInfo.jsx';
import MyBookingsUser from './components/user/MyBookingsUser.jsx';
import AdminNotes from './components/admin/AdminNotes.jsx';

// lazily load

const AdminBookings = React.lazy(() => import('./components/admin/AdminBookings.jsx'));


// root 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<LandingPageAdmin />} >
          {/* nested routing */}
          <Route path='' element={<AdminHomePage />} />
          <Route path='/admin/bookings' element={
            <Suspense fallback={
              <div className="text-center mt-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }>
              <AdminBookings />
            </Suspense>
          } />
          <Route path='/admin/rooms' element={<AdminRooms />} />
          <Route path='/admin/edit-rooms/:id' element={<AdminEditRoom />} />
          <Route path='/admin/settings' element={<AdminRegisterPage />} />
          <Route path='/admin/notes' element={<AdminNotes />} />

        </Route>

        <Route path='/admin/login' element={<AdminLoginPage />} />

        <Route path='/' element={<LandingPageUser />}>
          <Route path='' element={<HomePageUser />} />
          <Route path='/register' element={<ReactForm />} />
          <Route path='/room-info' element={<RoomsInfo />} />
          <Route path='/my-bookings' element={<MyBookingsUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
