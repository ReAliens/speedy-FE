import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getReservations,
  removeReservation,
} from '../../redux/reserveds/reserveActions';

const ReservationCard = ({ reservationData, carData }) => {
  const dispatch = useDispatch();
  const currentCarData = carData?.find(
    (item) => item.id === reservationData.item_id,
  );
  const handleClick = (reservationData) => {
    dispatch(removeReservation(reservationData.item_id, reservationData.id));
    dispatch(getReservations());
  };
  return (
    <div className="container border-2  w-2/3 border-gray-300 rounded-xl bg-orange-100 lg:ml-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center text-12 border-2 border-gray-300 rounded-xl bg-gray-100 md:grid row-span-4">
          <img
            src={currentCarData.photo}
            className="object-contain h-full"
          />
        </div>
        <div className="flex justify-center lg:pt-8">
          <div className="w-full text-center">
              <div className="w-full text-4xl">{currentCarData.name}</div>
              <div>{currentCarData.description}</div>
          </div>
        </div>
        <div className="flex justify-center gap-4 lg:pt-8">
            <span>{reservationData.name}</span>
            <span>{reservationData.city}</span>
        </div>

        <div className="flex flex-col items-center gap-2 lg:pt-4">
          <span>starting_at: {reservationData.started_at}</span>
          <span>ended_at: {reservationData.ended_at}</span>
        </div>
        <div class="flex justify-center ">
          <button
            className="bg-orange-500 hover:bg-red-700
            text-white font-bold py-2 px-4 rounded
            focus:outline-none focus:shadow-outline mb-4 lg:h-12 mt-14"
            onClick={() => handleClick(reservationData)}
            type="button"
          >
          Cancel
        </button>
        </div>
        </div>
    </div>
  );
};

export default ReservationCard;
