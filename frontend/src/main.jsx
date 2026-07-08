import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPageAdmin from './components/admin/LandingPageAdmin.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminHomePage from './components/admin/AdminHomePage.jsx';
import AdminBookings from './components/admin/AdminBookings.jsx';
import AdminRooms from './components/admin/AdminRooms.jsx';
import LandingPageUser from './components/user/LandingPageUser.jsx';
import HomePageUser from './components/user/HomePageUser.jsx';

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
          </Route>

          <Route path='/' element={<LandingPageUser />}>
              <Route path='' element={<HomePageUser />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
