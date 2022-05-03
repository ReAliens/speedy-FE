import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from '../pages/homePage/Home';
import Reservations from '../pages/reservationsPage/Reservations';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
