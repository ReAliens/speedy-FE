import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getItems, deleteItem } from '../../redux/items/itemsActions';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.items.items);
  const userId = useSelector((state) => state.auth.data.id);

  const carsBelongingToUser = cars.filter((car) => car.user_id === userId);

  const DeleteCarOnClick = (id) => {
    dispatch(deleteItem(id));
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className=" grid grid-flow-row justify-center items-center h-[80vh]">
      <ToastContainer autoClose={3000} />
      {carsBelongingToUser.length > 0 ? (
        carsBelongingToUser.map((car) => (
          <div key={car.id}>
            <div className="grid grid-cols-3 w-[90vw] h-[20vh] p-5 items-center bg-green-500 rounded-xl text-white font-bold">
              <div className="w-full h-full object-contain">
                <img src={car.photo} className="object-contain w-1/2 h-full" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-9">
                  <p>{car.name}</p>
                  <p>{car.description}</p>
                </div>
                <div className="flex flex-col gap-9 ">
                  <p> {car.price} $</p>
                </div>
              </div>
              <button
                onClick={() => {
                  DeleteCarOnClick(car.id);
                }}
                className="bg-red-500 hover:bg-red-700
              text-white font-bold py-2 px-4 rounded
              focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No car Belongs to you added yet</p>
      )}
    </div>
  );
};

export default DeleteCar;
