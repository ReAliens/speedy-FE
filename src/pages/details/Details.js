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

    <main class="flex flex-col">

      <div className="flex pt-20 place-content-center h-max">
        <div>
          <img
            src={item.photo}
            className="max-w-xl max-h-fit"
            alt="ferrari"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-center text-3xl">
            {item.name}
          </h2>
          <h6 className="mb-8 text-center">{item.description}</h6>
          <h6 className="mb-8 text-center">discount offer</h6>
          <table className="table-fixed">
            <tr className="bg-gray-300">
              <td className="px-2 py-2">Finance fee</td>
              <td>
                $
                <span>{item.price}</span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">Option to purchase fee</td>
              <td>
                $
                <span>{item.price}</span>
              </td>
            </tr>
            <tr className="bg-gray-300">
              <td className="px-2 py-2">Total ammount payable</td>
              <td>
                $
                <span>11</span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">Duration</td>
              <td>11</td>
            </tr>
          </table>
          <h3 className="mt-4">
            <strong>33</strong>
            Representative
          </h3>
          <h6 className="font-bold mt-4 text-right">Discover More Models</h6>
          <button type="button" className="bg-lime-500 rounded-full w-44 h-14 text-neutral-50 flex p-4">
            <img src="../reserve.png" alt="reserve " className="h-8" />
            <span className="text-lg">Reservation</span>
          </button>
        </div>
      </div>
      <div className="bg-lime-500 rounded-r-full w-12">
        <Link to="/home">
          <img src="../images/back2.png" alt="back" className="w-12 cursor-pointer pr-2" />
        </Link>
      </div>
    </main>

  );
};

export default Details;
