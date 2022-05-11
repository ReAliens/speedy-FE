import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.auth);
  return (
    <div
      className="lg:grid grid-flow-row m-4 place-items-center w-100 cursor-pointer"
      onClick={() => (selector.data ? navigate(`/details/${item.id}`) : null)}
      role="presentation"
    >
      <div className="grid grid-rows-2 place-items-center cursor-pointer">
        <div className="bg-orange-100 relative flex justify-center items-center w-48 h-48 rounded-full">
          <img
            src={item.photo}
            className="object-contain h-48 w-44 absolute right-24 top-[65px]"
            alt="cover"
          />
        </div>
        <div>
          <h3 className="text-center pt-2">{item.name}</h3>
          <div className="flex-grow border-t border-gray-300 border-dashed w-28 ml-12 p-2" />
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
