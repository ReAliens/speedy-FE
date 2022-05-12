import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleItem } from '../../redux/items/itemsActions';

const Details = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.singleItem.items);

  useEffect(() => {
    dispatch(getSingleItem(itemId));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto overflow-hidden md:max-w-4xl">
      <div className="md:flex pt-16">
        <div className="md:shrink-2">
          <img
            src={item.photo}
            alt="ferrari"
            className="h-48 w-full md:h-96 md:w-96 md:pt-20"
          />
        </div>
        <div className="p-8 w-96">
          <h2 className="font-bold text-right text-3xl">{item.name}</h2>
          <h6 className="mb-8 text-right">{item.description}</h6>
          <table className="table-fixed w-[100%]">
            <tr className="bg-gray-300">
              <td className="px-2 py-2 text-xl">price</td>
              <td>
                $<span>{item.price}</span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-left text-xl">specs</td>
              <td>
                <span className="px-2 py-2 bg-blue-200 text-right">
                  {item.specs}
                </span>
              </td>
            </tr>
          </table>
          <div className="flex flex-col justify-center items-center">
            <Link to="/">
              <h6 className="font-bold mt-4 text-right">
                Discover More Models
              </h6>
            </Link>
            <Link
              to={`/reservations/${itemId}/add-reservation`}
              className="bg-lime-500 rounded-full w-44 h-14 text-neutral-50 flex p-4"
            >
              <img src="../reserve.png" alt="reserve " className="h-8" />
              <span className="text-lg ">Reservation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
