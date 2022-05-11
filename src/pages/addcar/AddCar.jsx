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
        <div className="bg-slate-100 mt-24">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-slate-50 font-bold font-serif flex justify-center border border-red-800 mb-8 text-xl py-2 bg-purple-700 w-full md:h-16 md:text-3xl">
              Add Car to Our Collection
            </h2>
            <div class="text-xs font-normal mx-10 mb-10 md:px-20 sm:text-base lg:text-lg">
            <h5 className="text-fuchsia-700">Brand</h5>
            <input
              {...register('name', { required: true })}
              type="text"
              className="h-7 w-60 border-2 md:w-auto"
              placeholder="eg: Porsche"
            />
            <p className="text-red-500 mb-6">
              {errors.name && 'this field is required'}
            </p>
            <h5 className="text-fuchsia-700">Model</h5>
            <input
              {...register('specs', { required: true })}
              type="text"
              className="h-7 w-60 border-2 md:w-auto"
              placeholder="eg: 718 Boxster"
            />
            <p className="text-red-500 mb-6">
              {errors.specs && 'this field is required'}
            </p>
            <h5 className="text-fuchsia-700">Price</h5>
            <input
              {...register('price', { required: true })}
              type="text"
              className="h-7 w-60 border-2 md:w-auto"
              placeholder="eg: $62,600"
            />
            <p className="text-red-500 mb-6">
              {errors.price && 'this field is required'}
            </p>
            <h5 className="text-fuchsia-700">Image</h5>
            <input
              {...register('image', { required: true })}
              type="text"
              className="h-7 w-60 border-2 md:w-auto"
              placeholder="Image URL"
            />
            <p className="text-red-500 mb-6">
              {errors.image && 'this field is required'}
            </p>
            <h5 className="text-fuchsia-700">Description</h5>
            <textarea
              {...register('description', { required: true })}
              type="text"
              className="h-24 w-60 border-2 md:w-64 md:h-32"
              placeholder="Car Description"
            />
            <p className="text-red-500">
              {errors.description && 'this field is required'}
            </p>
            <br />
            <input
              type="submit"
              className="uppercase font-serif font-bold text-fuchsia-700 border-fuchsia-700 py-px border-2 w-20 cursor-pointer md:ml-12 md:py-1 md:w-40 md:text-base md:bg-purple-700 md:text-white md:font-semi-bold"
            />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddCar;
