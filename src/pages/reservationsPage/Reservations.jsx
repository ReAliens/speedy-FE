import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/authActions';

const Reservations = () => {
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
        <div className="font-medium bg-violet-50 mt-24 flex justify-center w-1/2">

          <form onSubmit={handleSubmit(submit)}>
            <h2 className="mt-8 text-2xl">Make Your Reservation</h2>
            <h5 className="text-fuchsia-700 mt-10">Select Car</h5>
            <input type="text" className="border-2 mt-1 mb-6 " />
            <h5 className="text-fuchsia-700">Model</h5>
            <input type="text" className="border-2 mt-1 mb-6" />
            <h5 className="text-fuchsia-700">Price</h5>
            <input type="text" className="border-2 mt-1 mb-6" />
            <h5 className="text-fuchsia-700">Image</h5>
            <input type="text" className="border-2 mt-1 mb-6" />
            <h5 className="text-fuchsia-700">Description</h5>
            <input type="text" className="border-2 mt-1 mb-6" />
            <br />
            <input type="submit" className="border-2 mt-5 mb-10 w-40 cursor-pointer" />

          </form>
        </div>
      </section>
    </main>
  );
};

export default Reservations;
