import React from 'react';

const ReservationCard = () => {
  return (
    <div className="grid grid-cols-3">
      <div>item Image</div>
      <div className="flex">
        <div className="flex flex-col">
          <p>item name</p>
          <div>item descr</div>
        </div>
        <span>reservation city</span>
      </div>
      <div className='flex flex-col'>
        <span>
          started_at: 56645132
        </span>
        <span>
          ended_at: 56645132
        </span>
      </div>
    </div>
  );
};

export default ReservationCard;
