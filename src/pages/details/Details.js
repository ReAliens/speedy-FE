import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../constants/Data';

const Details = () => {
  const { itemId } = useParams();
  const selectedItem = data.find((item) => item.id.toString() === itemId);
  return (
    <main class="flex flex-col">

      <div className="flex pt-20 place-content-center h-max">
        <div>
          <img
            src={selectedItem.image}
            className="max-w-xl max-h-fit pt-24"
            alt="ferrari"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-center text-3xl">{selectedItem.title}</h2>
          <h6 className="mb-8 text-center text-xs">discount offer</h6>
          <div className="table text-sm">
            <div className="bg-gray-300">
              <h5 className="px-2 py-2 justify-end flex items-center">
                Finance fee
                <span className="flex justify-end items-center w-56">
                  $
                  {selectedItem.financeFee}
                </span>
              </h5>
            </div>
            <div>
              <h5 className="px-2 py-2 justify-end flex items-center">
                Option to purchase fee
                <span className="flex justify-end items-center w-36">
                  $
                  {selectedItem.purchaseFee}
                </span>
              </h5>
            </div>
            <div className="bg-gray-300">
              <h5 className="px-2 py-2 justify-end flex items-center">
                Total ammount payable
                <span className="ml-24">
                  $
                  {selectedItem.payable}
                </span>
              </h5>
            </div>
            <div>
              <h5 className="px-2 py-2 justify-end flex items-center">
                Duration
                <span className="flex justify-end items-center w-60">
                  {selectedItem.Duration}
                  Months
                </span>
              </h5>
            </div>
          </div>
          <h5 className="mt-4">
            <strong>{selectedItem.APR}</strong>
            Representative
          </h5>
          <h6 className="font-bold mt-4 text-right">Discover More Models</h6>
          <button type="button" className="bg-lime-500 rounded-full w-44 h-14 text-neutral-50 flex p-4">
            <img src="../reserve.png" alt="reserve " className="h-8" />
            <span className="text-lg">Reservation</span>
          </button>
        </div>
      </div>
      <div className="bg-lime-500 rounded-r-full w-12">
        <Link to="/main">
          <img src="../images/back2.png" alt="back" className="w-12 cursor-pointer pr-2" />
        </Link>
      </div>
    </main>
  );
};

export default Details;
