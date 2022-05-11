import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from '../../components/ReservationCard/ReservationCard';
import { getReservations } from '../../redux/reserveds/reserveActions';

const Reservations = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const reservations = useSelector((state) => state.reservations.data);
  const user = useSelector((state) => state.auth.data);
  const userReservations = reservations?.filter(
    (reservation) => reservation.user_id === user.id,
  );
  useEffect(() => {
    dispatch(getReservations());
  }, []);
  return (
    <div className="grid grid-flow-row justify-center items-center gap-6 h-[95vh] overflow-auto">
      {userReservations?.map((item) => (
        <ReservationCard key={item.id} reservationData={item} carData={items} />
      ))}
    </div>
  );
};

export default Reservations;
