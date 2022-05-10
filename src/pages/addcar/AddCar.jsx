import React from 'react';
import { useForm } from 'react-hook-form';

const AddCar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <main>
      <section className="flex justify-center">
        <div className="font-medium bg-violet-50 mt-24 flex justify-center p-24">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="underline underline-offset-8 decoration-fuchsia-700 decoration-double mt-8 mb-16 text-3xl">
              Add Car to Our Collection
            </h2>
            <h5 className="text-xl text-fuchsia-700 mt-10">Brand</h5>
            <input
              {...register('name', { required: true })}
              type="text"
              className="h-10 w-72 border-2 mt-1 "
              placeholder="eg: Porsche"
            />
            <p className="text-red-500 mb-6">
              {errors.name && 'this field is required'}
            </p>
            <h5 className="text-xl text-fuchsia-700">Model</h5>
            <input
              {...register('specs', { required: true })}
              type="text"
              className="h-10 w-72 border-2 mt-1"
              placeholder="eg: 718 Boxster"
            />
            <p className="text-red-500 mb-6">
              {errors.specs && 'this field is required'}
            </p>
            <h5 className="text-xl text-fuchsia-700">Price</h5>
            <input
              {...register('price', { required: true })}
              type="text"
              className="h-10 w-72 border-2 mt-1 "
              placeholder="eg: $62,600"
            />
            <p className="text-red-500 mb-6">
              {errors.price && 'this field is required'}
            </p>
            <h5 className="text-xl text-fuchsia-700">Image</h5>
            <input
              {...register('image', { required: true })}
              type="text"
              className="h-10 w-72 border-2 mt-1 "
              placeholder="Image URL"
            />
            <p className="text-red-500 mb-6">
              {errors.image && 'this field is required'}
            </p>
            <h5 className="text-xl text-fuchsia-700">Description</h5>
            <input
              {...register('description', { required: true })}
              type="text"
              className="h-10 w-72 border-2 mt-1"
              placeholder="Car Description"
            />
            <p className="text-red-500 mb-6">
              {errors.description && 'this field is required'}
            </p>
            <br />
            <input
              type="submit"
              className="text-2xl font-bold text-fuchsia-700 border-fuchsia-700 p-2 w- border-4 mt-8 w-72 cursor-pointer"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddCar;