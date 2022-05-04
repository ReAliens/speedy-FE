import React from 'react';

const ItemCard = ({ prop }) => (
  <div className="grid grid-rows-2 gap-1 m-4 place-items-center w-56 pt-5">
    <div className="bg-teal-500 rounded-full w-52 pt-8">
      <img src={prop.image} className="w-64" alt="cover" />
    </div>
    <div>
      <h3 className="text-center pt-5">{prop.title}</h3>
      <div class="flex-grow border-t border-gray-100 w-28 ml-12 p-5" />
      <p className="text-center text-gray-800">{prop.description}</p>
    </div>
    <div className="icons flex flex-row justify-around">
      <img src="./images/facebook.png" alt="facebook" />
      <img src="./images/google.png" alt="facebook" />
      <img src="./images/parking.png" alt="facebook" />
      <img src="./images/scooter.png" alt="facebook" />
    </div>
  </div>
);

export default ItemCard;
