import React from 'react';

const ReservationCard = ({ reservationData, carData }) => {
  const currentCarData = carData?.find(
    (item) => item.id === reservationData.item_id,
  );
  console.log(currentCarData);
  return (
    <div className="grid grid-cols-3 w-[90vw] h-[20vh] p-5 items-center bg-green-500 rounded-xl text-white font-bold">
      <div className="w-full h-full object-contain">
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
  );
};

export default ReservationCard;
