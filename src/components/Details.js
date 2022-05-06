import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../constants/Data';

const Details = () => {
  const { itemId } = useParams();
  const selectedItem = data.find((item) => item.id.toString() === itemId);
  console.log(selectedItem);
  return (
    <>
      <div className="flex mt-28 place-content-center">
        <div>
          <img
            src={selectedItem.image}
            className="max-w-3xl max-h-fit"
            alt="ferrari"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-center text-3xl">{selectedItem.title}</h2>
          <h6 className="mb-8 text-center">discount offer</h6>
          <table className="table-fixed">
            <tr className="bg-gray-300">
              <td className="px-2 py-2">Finance fee</td>
              <td>
                $
                <span>{selectedItem.financeFee}</span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">Option to purchase fee</td>
              <td>
                $
                <span>{selectedItem.purchaseFee}</span>
              </td>
            </tr>
            <tr className="bg-gray-300">
              <td className="px-2 py-2">Total ammount payable</td>
              <td>
                $
                <span>{selectedItem.payable}</span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">Duration</td>
              <td>{selectedItem.Duration}</td>
            </tr>
          </table>
          <h3 className="mt-4">
            <strong>{selectedItem.APR}</strong>
            {' '}
            Representative
          </h3>
          <h6 className="font-bold mt-4 text-right">Discover More Models</h6>
        </div>
      </div>
      <Link to="/main">
        <div className="w-12 cursor-pointer">
          <img src="../images/back.png" alt="back" />
        </div>
      </Link>
    </>
  );
};

export default Details;
