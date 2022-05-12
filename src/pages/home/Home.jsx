import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="h-full w-full flex justify-center relative bg-orange-400">
    <img
      src="/car.png"
      alt="page-cover"
      className="object-contain w-full h-full mb-12"
    />
    <div className="absolute top-[8%] h-[60vh] flex flex-col justify-around items-center py-2 pl-12">
      <div className="text-white text-center font-bold mt-24 text-6xl flex w-full items-center justify-center">
        <span>Speedy</span>
      </div>
      <p className="text-white opacity-75 font-bold text-2xl mb-32">
        Pick your favorite car in just one click
      </p>
      <div className="flex w-full justify-around mt-24">
        <Link to="/login">
          <span className=" rounded-lg hover:text-green-500 hover:bg-white hover:font-bold py-2 px-2 bg-green-500 mr-0 font-bold text-white">
            Log in
          </span>
        </Link>
        <Link to="/signup">
          <span className="rounded-lg hover:text-green-500 hover:bg-white hover:font-bold  bg-green-500 mr-10 py-2 px-2 font-bold text-white">
            Sign up
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
