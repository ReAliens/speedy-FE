import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleItem } from '../../redux/items/itemsActions';

const Details = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.singleItem.items);
  console.log(item)

  useEffect(() => {
    dispatch(getSingleItem(itemId));
  }, []);

  return (

    <div className="max-w-md mx-auto overflow-hidden md:max-w-4xl">
  <div className="md:flex pt-16">
    <div className="md:shrink-2">
    <img
      src={item.photo}
      alt="ferrari"
      className="h-48 w-full md:h-96 md:w-96 md:pt-20"
      />
    </div>
    <div className="p-8 w-96">
       <h2 className="font-bold text-right text-3xl">
        {item.name}
        </h2>
        <h6 className="mb-8 text-right">{item.description}</h6>
        <table className="table-fixed w-[100%]">
          <tr className="bg-gray-300">
            <td className="px-2 py-2 text-xl">price</td>
            <td>
              $
              <span>{item.price}</span>
            </td>
          </tr>
          <tr>
          <td className="px-2 py-2 text-left text-xl">specs</td>
            <td>
            <span className="px-2 py-2 bg-blue-200 text-right">{item.specs}</span>
            </td>
          </tr>
        </table>

        <h6 className="font-bold mt-16 text-right">Discover More Models</h6>
        <button type="button" className="bg-lime-500 rounded-full w-44 h-14 text-neutral-50 flex p-4 mt-24 ml-28">
          <img src="../reserve.png" alt="reserve " className="h-8" />
          <span className="text-lg ">Reservation</span>
        </button>
    </div>
  </div>
  <div className="bg-lime-500 rounded-r-full w-12">
        <Link to="/home">
          <img src="../images/back2.png" alt="back" className="w-12 cursor-pointer pr-2" />
        </Link>
      </div>
</div>
);
};

export default Details;


