import React from 'react';

const Home = () => (
  <div className="h-full w-full bg-orange-200 flex justify-center relative">
    <img src="/car.png" alt="page-cover" className="object-contain" />
    <div className="absolute top-[20%]  text-center">
      <div className="text-white font-bold text-5xl flex items-center w-[100%] ">
        Speedy
        <div className="car ml-12" />
      </div>
      <p className="text-white opacity-75 font-bold text-2xl mt-4">
        Pick your favorite car in just one click
      </p>
    </div>
  </div>
);

export default Home;
