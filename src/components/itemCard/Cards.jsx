import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ prop }) => (
  <Link to={`/details/${prop.id}`}>
    <div className="grid grid-rows-2 gap-1 m-4 place-items-center w-56 pt-5 cursor-pointer">
      <div className="bg-orange-200 relative flex justify-center items-center w-28 h-28 rounded-full">
        <img
          src={prop.image}
          className="object-contain h-64 w-64 absolute right-5 top-[-55px]"
          alt="cover"
        />
      </div>
      <div>
        <h3 className="text-center pt-5">{prop.title}</h3>
        <div className="flex-grow border-t border-gray-300 border-dashed w-28 ml-12 p-5" />
        <p className="text-center text-gray-800">{prop.description}</p>
      </div>
      <div className="icons flex flex-row">
        <img src="./images/facebook.png" alt="facebook" className="h-8 mr-4" />
        <img src="./images/google.png" alt="facebook" className="h-8 mr-4" />
        <img src="./images/twitter.png" alt="facebook" className="h-8 mr-4" />
      </div>
    </div>
  </Link>
);

export default ItemCard;
