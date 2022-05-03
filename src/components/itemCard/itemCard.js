/* eslint-disable max-len */
import React from 'react';

const ItemCard = () => (
  <>
    <div>
      <h1>LATEST MODELS</h1>
      <h4>Please select a Tesla Model</h4>
    </div>
    <section class="grid grid-cols-3 gap-4">
      <div class="bg-cyan-100">
        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/35861782-9705-4f73-84f0-86d615adb661/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD" alt="models" />
        <h2 class="font-bold">Model S</h2>
        <p>The Tesla Model S is a battery-powered liftback car produced by Tesla, Inc. It was introduced on June 22, 2012, and is positioned as Tesla&apos;s flagship model.</p>
        <ul>
          <li>
            <i class="fa-solid fa-user" />
          </li>
        </ul>
      </div>
      <div class="bg-slate-100">
        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5102fa27-0d41-4f79-b07b-7ffb1ceb55ff/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD" alt="modelx" />
        <h2 class="font-bold">Model X</h2>
        <p>The Tesla Model X is a battery electric mid-size luxury crossover produced by Tesla, Inc. since 2015. Developed from the full-sized sedan platform of the Tesla Model S, the vehicle is notable in that it uses falcon-wing doors for passenger access.</p>
      </div>
      <div class="bg-gray-300">
        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2" alt="modely" />
        <h2 class="font-bold">Model Y</h2>
        <p>The Tesla Model Y is a battery electric compact crossover manufactured by Tesla, Inc. Tesla unveiled it in March 2019, started production at its Fremont plant in January 2020, and started deliveries on March 13, 2020.</p>
      </div>
    </section>
  </>
);

export default ItemCard;
