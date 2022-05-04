/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const ItemCard = () => (
  <>
    <div>
      <h1>LATEST MODELS</h1>
      <h4>Please select a Tesla Model</h4>
    </div>
    <section class="grid grid-cols-3 gap-16">
      <div class="card-1">
        <div class="bg-cyan-100 rounded-full">
          <img src="https://www.pngmart.com/files/4/Car-PNG-Photos.png" alt="models" />
        </div>
        <div class="m-8">
          <h2 class="text-center font-bold">Model S</h2>
          <hr class="mb-8 mt-8" />
          <p>The Tesla Model S is a battery-powered liftback car produced by Tesla, Inc. It was introduced on June 22, 2012, and is positioned as Tesla&apos;s flagship model.</p>
          <ul class="flex flex-row gap-12 justify-center mt-4">
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-slate-400 rounded-full" icon={brands('facebook')} />
            </li>
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-indigo-600 rounded-full" icon={brands('twitter')} />
            </li>
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-indigo-600 rounded-full" icon={brands('instagram')} />
            </li>
          </ul>
        </div>
      </div>
      <div class="card-2">
        <div class="bg-slate-100 rounded-full">
          <img class="w-96 h-64" src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png" alt="modelx" />
        </div>
        <div class="m-8">
          <h2 class="text-center font-bold">Model X</h2>
          <hr class="mb-8 mt-8" />
          <p>The Tesla Model X is a battery electric mid-size luxury crossover produced by Tesla, Inc. since 2015. Developed from the full-sized sedan platform of the Tesla Model S, the vehicle is notable in that it uses falcon-wing doors for passenger access.</p>
          <ul class="flex flex-row justify-center gap-4 mt-4">
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-slate-400 rounded-full" icon={brands('facebook')} />
            </li>
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-indigo-600 rounded-full" icon={brands('twitter')} />
            </li>
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-indigo-600 rounded-full" icon={brands('instagram')} />
            </li>
          </ul>
        </div>
      </div>
      <div class="card-3">
        <div class="bg-gray-300 rounded-full">
          <img src="https://www.pngmart.com/files/4/Car-PNG-Photos.png" alt="modely" />
        </div>
        <div class="m-8">
          <h2 class="text-center font-bold">Model Y</h2>
          <hr class="mb-8 mt-8" />
          <p>The Tesla Model Y is a battery electric compact crossover manufactured by Tesla, Inc. Tesla unveiled it in March 2019, started production at its Fremont plant in January 2020, and started deliveries on March 13, 2020.</p>
          <ul class="flex flex-row justify-center gap-4 mt-4">
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-slate-400 rounded-full" icon={brands('facebook')} />
            </li>
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-indigo-600 rounded-full" icon={brands('twitter')} />
            </li>
            <li>
              <FontAwesomeIcon class="w-8 p-1 border-solid border-2 border-indigo-600 rounded-full" icon={brands('instagram')} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default ItemCard;
