import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="h-full w-full flex justify-center relative bg-orange-400">
    <img
      src="/car.png"
      alt="page-cover"
      className="object-contain w-full h-full"
    />
    <div className="absolute top-[10%] h-[70vh] text-center flex flex-col justify-around items-center py-10">
      <div className="text-white text-center font-bold text-6xl flex w-full items-center justify-center">
        <span>Speedy</span>
      </div>
      <p className="text-white opacity-75 font-bold text-2xl mt-4">
        Pick your favorite car in just one click
      </p>
      <div className="flex w-full justify-around">
        <Link to="/login">
          <span className="border-2 border-green-500 rounded-3xl hover:text-green-500 hover:bg-white hover:font-bold py-2 px-10 bg-green-500  text-white">
            Log in
          </span>
        </Link>
        <Link to="/signup">
          <span className="border-2 border-green-500 rounded-3xl hover:text-green-500 hover:bg-white hover:font-bold py-2 px-10 bg-green-500  text-white">
            Sign up
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
