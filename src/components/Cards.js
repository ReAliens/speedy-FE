import React from 'react';

const ItemCard = ({ prop }) => (
  <div className="grid grid-rows-2 gap-1 m-5">
    <div className="bg-teal-600 rounded-full w-40 h-40 flex justify-center items-center">
      <img src={prop.image} className="w-24 h-24 " alt="cover" />
    </div>
    <div>
      <h3 className="text-center pt-20">{prop.title}</h3>
      <p className="text-center">{prop.description}</p>
    </div>
  </div>
);

export default ItemCard;
