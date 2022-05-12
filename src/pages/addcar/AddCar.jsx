import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem } from '../../redux/items/itemsActions';
import { ToastContainer } from 'react-toastify';

const AddCar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state);

  const onSubmit = (data) => {
    dispatch(addNewItem(data));
    reset();
  };

  return (
    <main className="flex justify-center items-center w-full h-[95vh]">
      <ToastContainer autoClose={3000} />
      <section className="flex w-[90%] md:px-28">
        <div className="bg-slate-100 border-2 border-green-900 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-slate-50 font-bold font-serif flex justify-center mb-8 text-xl py-2 bg-green-600 w-full md:h-16 md:text-3xl">
              Add Car to Our Collection
            </h2>
            <div className="text-xs font-normal px-10 mb-10 md:px-20 sm:text-base lg:text-lg">
              <h5 className="text-fuchsia-700">Brand</h5>
              <input
                {...register('name', { required: true })}
                type="text"
                className="p-2 md:p-4  h-7 w-full border-2"
                placeholder="eg: Porsche"
              />
              <p className="text-red-500 mb-6">
                {errors.name && 'this field is required'}
              </p>
              <h5 className="text-fuchsia-700">Model</h5>
              <input
                {...register('specs', { required: true })}
                type="text"
                className="p-2 md:p-4 h-7 w-full border-2"
                placeholder="eg: 718 Boxster"
              />
              <p className="text-red-500 mb-6">
                {errors.specs && 'this field is required'}
              </p>
              <h5 className="text-fuchsia-700">Price</h5>
              <input
                {...register('price', { required: true })}
                type="text"
                className="p-2 md:p-4 h-7 w-full border-2"
                placeholder="eg: $62,600"
              />
              <p className="text-red-500 mb-6">
                {errors.price && 'this field is required'}
              </p>
              <h5 className="text-fuchsia-700">Image</h5>
              <input
                {...register('photo', { required: true })}
                type="text"
                className="p-2 md:p-4 h-7 w-full border-2"
                placeholder="Image URL"
              />

              <p className="text-red-500 mb-6">
                {errors.photo && 'this field is required'}
              </p>
              <h5 className="text-fuchsia-700">Description</h5>
              <textarea
                {...register('description', { required: true })}
                type="text"
                className="p-2 md:p-4 h-24 w-full border-2  md:h-32"
                placeholder="Car Description"
              />
              <p className="text-red-500">
                {errors.description && 'this field is required'}
              </p>
              <input
                {...register('user_id', { required: true })}
                type="hidden"
                value={currentUser.auth.data.id}
              />
              <br />
              <div className="flex w-full justify-center">
                <input
                  type="submit"
                  className="bg-green-50 hover:text-green-700 hover:bg-white rounded uppercase font-serif font-bold text-fuchsia-700 border-green-700 py-1 px-6 border-2 cursor-pointer md:ml-14 md:py-1 md:w-36 md:text-base md:bg-green-600 md:text-white md:font-semi-bold md:border-green-900 md:rounded-full"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddCar;
