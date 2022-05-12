import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Home from '../pages/home/Home';
import MainPage from '../pages/mainPage/Main';
import Details from '../pages/details/Details';
import AddCar from '../pages/addcar/AddCar';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import ReserveItem from '../pages/ReserveItem/ReserveItem';
import Reservations from '../pages/myReservations/Reservations';
import DeleteCar from '../pages/deleteCar/DeleteCar';

const AppRoutes = () => {
  const selector = useSelector((state) => state.auth);
  const token = localStorage.getItem('token');
  return (
    <Suspense>
      <Routes>
        {selector.data && token ? (
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:itemId" element={<Details />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/delete-car" element={<DeleteCar />} />
            <Route path="/add-reservation" element={<ReserveItem />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route
              path="/reservations/:item_id/add-reservation"
              element={<ReserveItem />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
