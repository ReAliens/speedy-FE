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
    <div className="flex flex-col rounded-xl border-2">
      <div className="grid grid-cols-3 w-[90vw] h-[20vh] p-5 items-center bg-green-500 text-white font-bold mt-5">
        <div className="w-full h-[80%] object-contain flex justify-center items-center">
          <img
            src={currentCarData.photo}
            className="object-contain w-1/2 h-full"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-9">
            <p>{currentCarData.name}</p>
            <div>{currentCarData.description}</div>
          </div>
          <div className="flex flex-col gap-9">
            <span>{reservationData.name}</span>
            <span>{reservationData.city}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-9">
          <span>starting_at: {reservationData.started_at}</span>
          <span>ended_at: {reservationData.ended_at}</span>
        </div>
      </div>
      <button
        className="h-8 border-green-500 border-2 hover:bg-green-500 hover:text-white hover:font-bold"
        onClick={() => handleClick(reservationData)}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default ReservationCard;
