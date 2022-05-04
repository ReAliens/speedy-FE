import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from '../pages/homePage/Home';
import Reservations from '../pages/reservationsPage/Reservations';
import HoPage from '../pages/home/HoPage';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<HoPage />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
