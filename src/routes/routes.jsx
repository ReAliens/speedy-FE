import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Reservations from '../pages/reservationsPage/Reservations';
import Home from '../pages/home/Home';
import MainPage from '../pages/mainPage/Main';
import Details from '../components/Details';
import Login from '../pages/login/Login';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/details" element={<Details />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
