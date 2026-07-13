import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'
import LandingPageAdmin from './components/admin/LandingPageAdmin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from './components/admin/AdminHomePage.jsx';
import AdminBookings from './components/admin/AdminBookings.jsx';
import AdminRooms from './components/admin/AdminRooms.jsx';
import LandingPageUser from './components/user/LandingPageUser.jsx';
import HomePageUser from './components/user/HomePageUser.jsx';
import AdminEditRoom from './components/admin/AdminEditRoom.jsx';
import AdminRegisterPage from './components/admin/AdminRegisterPage.jsx';
import AdminLoginPage from './components/admin/AdminLoginPage.jsx';
import ReactForm from './components/user/ReactForm.jsx';


// root 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<LandingPageAdmin />} >
          {/* nested routing */}
          <Route path='' element={<AdminHomePage />} />
          <Route path='/admin/bookings' element={<AdminBookings />} />
          <Route path='/admin/rooms' element={<AdminRooms />} />
          <Route path='/admin/edit-rooms/:id' element={<AdminEditRoom />} />
          <Route path='/admin/settings' element={<AdminRegisterPage />} />

        </Route>

        <Route path='/admin/login' element={<AdminLoginPage />} />

        <Route path='/' element={<LandingPageUser />}>
          <Route path='' element={<HomePageUser />} />
          <Route path='/register' element={<ReactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
