import React from 'react';
import { useForm } from 'react-hook-form';

const Reservations = () => {
  const { handleSubmit, register } = useForm();

  const submit = async (data) => {
    console.log(data);
  };

  return (
    <main>
      <section className="flex justify-center">
        <div className="font-medium bg-violet-50 mt-24 flex justify-center w-1/2">
          <form onSubmit={handleSubmit(submit)}>
            <h2 className="underline underline-offset-8 decoration-fuchsia-700 decoration-double mt-8 mb-16 text-3xl">
              Make Your Reservation
            </h2>
            <h5 className="text-xl text-fuchsia-700 mt-10">Select Car</h5>
            <input
              className="h-10 w-72 border-2 mt-1 mb-6"
              {...register('name')}
            />
            <h5 className="text-xl text-fuchsia-700">City</h5>
            <input
              type="text"
              className="h-10 w-72 border-2 mt-1 mb-6"
              {...register('city')}
            />
            <h5 className="text-xl text-fuchsia-700">Start Date</h5>
            <input
              type="date"
              className="h-10 w-72 border-2 mt-1 mb-6"
              {...register('started_at')}
            />
            <h5 className="text-xl text-fuchsia-700">End Date</h5>
            <input
              type="date"
              className="h-10 w-72 border-2 mt-1 mb-6"
              {...register('ended_at')}
            />
            <br />
            <input
              type="submit"
              className="text-2xl font-bold text-fuchsia-700 border-fuchsia-700 p-2 w- border-4 mt-8 mb-12 w-72 cursor-pointer"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Reservations;
