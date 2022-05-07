import React from 'react';
import './style.css';

function lifestyle() {
  return (
    <div className="container min-h-screen flex items-center">
      <div className="flex-1 max-w-4xl mx-auto">
        <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 md:gap-0 justify-items-center content-center max-w-3xl auto-cols-max">
          <li className="mb-4 flex flex-wrap">
            <img src="../images/car7.jpg" alt="style" />
          </li>
          <li className="bg-lime-500 flex flex-col place-content-center">
            <h3 className="text-white font-bold">THE LOVE</h3>
            <img src="../images/play-buttons.png" alt="style" />
          </li>
          <li class="mb-4 flex flex-wrap">
            <img src="../images/car5.jpg" alt="style" />
          </li>
          <li className="bg-yellow-300 pl-20 flex flex-col place-content-center">
            <h3 className="text-white font-bold">THE LOVE</h3>
            <img src="../images/play-buttons.png" alt="style" />
          </li>
          <li class="mb-4 flex flex-wrap">
            <img src="../images/bmw.png" alt="style" />
          </li>
          <li className="bg-zinc-900 pl-20 flex flex-col place-content-center">
            <h3 className="text-white font-bold">THE LOVE</h3>
            <img src="../images/play-buttons.png" alt="style" />
          </li>
          <li>
            <img src="../images/car5.jpg" alt="style" />
          </li>
          <li className="bg-cyan-300 pl-20 flex flex-col place-content-center">
            <h3 className="text-white font-bold">THE LOVE</h3>
            <img src="../images/play-buttons.png" alt="style" />
          </li>
          <li>
            <img src="../images/car3.jpg" alt="style" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default lifestyle;
