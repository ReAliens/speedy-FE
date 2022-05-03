import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Reservations from '../pages/reservationsPage/Reservations';
import MainPage from '../pages/mainPage/Main';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
