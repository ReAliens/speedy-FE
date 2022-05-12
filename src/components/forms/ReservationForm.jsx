import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReservationForm = ({ submit, handleSubmit, register, errors }) => {
  const { item_id } = useParams();

  const items = useSelector((state) => state.items.items);
  const selectedItem = useMemo(() => {
    return item_id ? items.find((item) => item.id.toString() === item_id) : '';
  }, []);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2 className="text-slate-50 font-bold font-serif flex justify-center mb-8 text-xl py-2 bg-green-600 w-full md:h-16 md:text-3xl">
        Make Your Reservation
      </h2>
      <div className="text-xs font-normal px-10 mb-10 md:px-20 sm:text-base lg:text-lg">
        <h5 className="text-fuchsia-700">Reservation name</h5>
        <input
          type="text"
          className="p-2 md:p-4 h-7 w-full border-2"
          {...register('name', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.name && 'this field is required'}
        </p>

        <h5 className=" text-fuchsia-700 mt-10">Select Car</h5>
        {!item_id ? (
          <select
            placeholder="Select car"
            defaultValue=""
            className="h-10 w-full border-2 mt-1 bg-white"
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
            className="h-10 w-full border-2 mt-1 bg-white"
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
        <h5 className=" text-fuchsia-700">City</h5>
        <input
          type="text"
          className="p-2 md:p-4 h-7 w-full border-2"
          {...register('city', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.city && 'this field is required'}
        </p>
        <h5 className=" text-fuchsia-700">Start Date</h5>
        <input
          type="date"
          className="p-2 md:p-4 h-7 w-full border-2"
          {...register('started_at', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.started_at && 'this field is required'}
        </p>
        <h5 className=" text-fuchsia-700">End Date</h5>
        <input
          type="date"
          className="p-2 md:p-4 h-7 w-full border-2"
          {...register('ended_at', { required: true })}
        />
        <p className="text-red-500 mb-6">
          {errors.ended_at && 'this field is required'}
        </p>
        <br />
        <div className="flex w-full justify-center">
          <input
            type="submit"
            className="bg-green-50 hover:text-green-700 hover:bg-white rounded uppercase font-serif font-bold text-fuchsia-700 border-green-700 py-1 px-6 border-2 cursor-pointer md:ml-14 md:py-1 md:w-36 md:text-base md:bg-green-600 md:text-white md:font-semi-bold md:border-green-900 md:rounded-full"
          />
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
