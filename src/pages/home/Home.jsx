import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="h-full w-full flex justify-center relative bg-orange-400">
    <img
      src="/car.png"
      alt="page-cover"
      className="object-contain w-full h-full"
    />
    <div className="absolute top-[8%] h-[60vh] flex flex-col justify-around items-center py-2 pl-12">
      <div className="text-white text-center font-bold text-6xl flex w-full items-center justify-center">
        <span>Speedy</span>
      </div>
      <p className="text-white opacity-75 font-bold text-2xl mt-0">
        Pick your favorite car in just one click
      </p>
      <div className="flex w-full justify-around pt-12">
        <Link to="/login">
          <span className=" rounded-full hover:text-green-500 hover:bg-white hover:font-bold py-6 px-2 bg-orange-500 mr-52 font-bold text-white">
            Log in
          </span>
        </Link>
        <Link to="/signup">
          <span className="rounded-full hover:text-green-500 hover:bg-white hover:font-bold  bg-orange-500 mr-10 py-5 font-bold text-white">
            Sign up
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
