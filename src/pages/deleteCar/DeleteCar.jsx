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
          <div key={car.id} className="flex justify-center " >
            <div class="container border-2  w-2/3 border-gray-300 rounded-xl bg-orange-100">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="flex justify-center text-12 border-2 border-gray-300 rounded-xl bg-gray-100 md:grid row-span-4">
                  <img src={car.photo} className="object-contain h-full" />
                </div>
                <div class="flex justify-center lg:pt-8">
                  <div className="w-full text-center">
                    <div className="w-full text-4xl">{car.name}</div>
                    <div> {car.description} </div>
                  </div>
                </div>
                <div class="flex justify-center lg:pt-16">
                  <p> ${car.price} </p>
                </div>
                <div class="flex justify-center ">
                  <button
                    onClick={() => {
                      DeleteCarOnClick(car.id);
                    }}
                    className="bg-orange-500 hover:bg-red-700
              text-white font-bold py-2 px-4 rounded
              focus:outline-none focus:shadow-outline mb-4 lg:h-12 mt-14"
                  >
                    Delete
                  </button>
                </div>
              </div>
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
