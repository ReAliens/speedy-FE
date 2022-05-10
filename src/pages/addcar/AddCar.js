import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/authActions';

const AddCar = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
  } = useForm();

  const submit = async (data) => {
    dispatch(loginAction(data));
  };

  return (
    <main>
      <section className="flex justify-center">
        <div className="font-medium bg-violet-50 mt-24 flex justify-center p-24">

          <form onSubmit={handleSubmit(submit)}>
            <h2 className="underline underline-offset-8 decoration-fuchsia-700 decoration-double mt-8 mb-16 text-3xl">Add Car to Our Collection</h2>
            <h5 className="text-xl text-fuchsia-700 mt-10">Brand</h5>
            <input type="text" className="h-10 w-72 border-2 mt-1 mb-6" placeholder="eg: Porsche" />
            <h5 className="text-xl text-fuchsia-700">Model</h5>
            <input type="text" className="h-10 w-72 border-2 mt-1 mb-6" placeholder="eg: 718 Boxster" />
            <h5 className="text-xl text-fuchsia-700">Price</h5>
            <input type="text" className="h-10 w-72 border-2 mt-1 mb-6" placeholder="eg: $62,600" />
            <h5 className="text-xl text-fuchsia-700">Image</h5>
            <input type="text" className="h-10 w-72 border-2 mt-1 mb-6" placeholder="Image URL" />
            <h5 className="text-xl text-fuchsia-700">Description</h5>
            <input type="text" className="h-10 w-72 border-2 mt-1 mb-6" placeholder="Car Description" />
            <br />
            <input type="submit" className="text-2xl font-bold text-fuchsia-700 border-fuchsia-700 p-2 w- border-4 mt-8 w-72 cursor-pointer" />

          </form>
        </div>
      </section>
    </main>
  );
};

export default AddCar;
