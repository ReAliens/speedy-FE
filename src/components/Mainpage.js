import React from 'react';
import '../index.css';
import Data from './Data';
import Cards from './Cards';

export default function Mainpage() {
  const motoList = Data.map((prop) => (
    <Cards
      key={prop.id}
      image={prop.image}

    />
  ));

  return (
    <div className="container">
      <div className="menu border-cyan-200 border-r-4 border-indigo-500 ...">
        <h1 className="title">Verspa</h1>
        <a href="www.google.com" className="group block rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:green-500">
          <div className="flex">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" />
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">MODELS</h3>
          </div>
        </a>

        <a href="www.google.com" className="group block max-w-xs mx-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" />
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">LIFESTYLE</h3>
          </div>
        </a>

        <a href="www.google.com" className="group block max-w-xs mx-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" />
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">SHOP</h3>
          </div>
        </a>

        <a href="www.google.com" className="group block max-w-xs mx-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" />
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">TEST DRIVE</h3>
          </div>
        </a>
        <div className="icons">
          <img src="./images/facebook.png" alt="facebook" />
          <img src="./images/twitter.png" alt="twitter" />
          <img src="./images/parking.png" alt="parking" />
          <img src="./images/scooter.png" alt="scooter" />
        </div>
      </div>
      <div className="main-page">
        <h1 className="text-center ...">LATEST MODELS</h1>
        <p className="text-center ...">Please select a Vespa Model</p>
        <div className="moto-image">
          {motoList}
        </div>
      </div>
    </div>
  );
}
