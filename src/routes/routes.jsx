import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Reservations from '../pages/reservationsPage/Reservations';
import Home from '../pages/home/Home';
import MainPage from '../pages/mainPage/Main';
import Details from '../pages/details/Details';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
// import useAuth from '../hooks/useAuth';

const AppRoutes = () => {
  const selector = useSelector((state) => state.auth);
  console.log(selector);
  return (
    <Suspense>
      <Routes>
        {selector.data ? (
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/details/:itemId" element={<Details />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
