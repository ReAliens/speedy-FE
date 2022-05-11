import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.auth);
  return (
    <div
      className="grid gap-1 m-4 place-items-center w-56 pt-5 cursor-pointer"
      onClick={() => (selector.data ? navigate(`/details/${item.id}`) : null)}
      role="presentation"
    >
      <div className="grid grid-rows-2 gap-1 m-4 place-items-center w-56 pt-5 cursor-pointer">
        <div className="bg-orange-200 relative flex justify-center items-center w-28 h-28 rounded-full">
          <img
            src={item.photo}
            className="object-contain h-64 w-64 absolute "
            alt="cover"
          />
        </div>
        <div>
          <h3 className="text-center pt-5">{item.name}</h3>
          <div className="flex-grow border-t border-gray-300 border-dashed w-28 ml-12 p-5" />
          <p className="text-center text-gray-800">{item.description}</p>
        </div>
        <div className="icons flex flex-row">
          <img
            src="./images/facebook.png"
            alt="facebook"
            className="h-8 mr-4"
          />
          <img src="./images/google.png" alt="facebook" className="h-8 mr-4" />
          <img src="./images/twitter.png" alt="facebook" className="h-8 mr-4" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
