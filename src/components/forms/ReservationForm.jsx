import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReservationForm = ({ submit, carName }) => {
  const { item_id } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const items = useSelector((state) => state.items.items);
  const selectedItem = useMemo(() => {
    return item_id ? items.find((item) => item.id.toString() === item_id) : '';
  }, []);
  console.log(selectedItem);
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h2 className="underline underline-offset-8 decoration-fuchsia-700 decoration-double mt-8 mb-16 text-3xl">
          Make Your Reservation
        </h2>
        <h5 className="text-xl text-fuchsia-700">Reservation name</h5>
        <input
          type="text"
          className="h-10 w-72 border-2 mt-1"
          {...register('name', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.name && 'this field is required'}
        </p>

        <h5 className="text-xl text-fuchsia-700 mt-10">Select Car</h5>
        {!item_id ? (
          <select
            placeholder="Select car"
            defaultValue=""
            className="h-10 w-72 border-2 mt-1 bg-white"
            {...register('item', { required: true })}
          >
            <option value="" disabled hidden>
              select car
            </option>
            {items?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        ) : (
          <select
            placeholder="Select car"
            defaultValue={selectedItem.id}
            className="h-10 w-72 border-2 mt-1 bg-white"
            {...register('item')}
          >
            <option key={selectedItem.id} value={selectedItem.id}>
              {selectedItem.name}
            </option>
            ))
          </select>
        )}
        <p className="text-red-500 mb-6">
          {errors.item && 'this field is required'}
        </p>
        <h5 className="text-xl text-fuchsia-700">City</h5>
        <input
          type="text"
          className="h-10 w-72 border-2 mt-1"
          {...register('city', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.city && 'this field is required'}
        </p>
        <h5 className="text-xl text-fuchsia-700">Start Date</h5>
        <input
          type="date"
          className="h-10 w-72 border-2 mt-1"
          {...register('started_at', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.started_at && 'this field is required'}
        </p>
        <h5 className="text-xl text-fuchsia-700">End Date</h5>
        <input
          type="date"
          className="h-10 w-72 border-2 mt-1"
          {...register('ended_at', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.ended_at && 'this field is required'}
        </p>
        <br />
        <input
          type="submit"
          className="text-2xl font-bold text-fuchsia-700 border-fuchsia-700 p-2 w- border-4 mt-8 mb-12 w-72 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ReservationForm;
