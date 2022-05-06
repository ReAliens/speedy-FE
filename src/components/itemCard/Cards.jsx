import React from 'react';

const ItemCard = ({ prop }) => (
  <div className="grid grid-rows-2 gap-1 m-4 place-items-center w-56 pt-5">
    <div className="bg-orange-200 relative flex justify-center items-center w-28 h-28 rounded-full">
      <img
        src={prop.image}
        className="object-contain h-64 w-64 absolute right-5 top-[-55px]"
        alt="cover"
      />
    </div>
    <div>
      <h3 className="text-center pt-5">{prop.title}</h3>
      <div class="flex-grow border-t border-gray-300 border-dashed w-28 ml-12 p-5" />
      <p className="text-center text-gray-800">{prop.description}</p>
    </div>
    <div className="icons flex flex-row justify-around h-12">
      <img src="./images/facebook.png" alt="facebook" />
      <img src="./images/google.png" alt="facebook" />
      <img src="./images/twitter.png" alt="facebook" />
    </div>
  </div>
);

export default ItemCard;
