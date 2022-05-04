import React from 'react';

const Details = () => (
  <div class="flex">
    <div>
      <img
        src="https://pngimg.com/uploads/ferrari/ferrari_PNG10657.png"
        class="w-96"
        alt="ferrari"
      />
    </div>
    <div>
      <h2>Ferrai</h2>
      <h6>discount offer</h6>
      <table>
        <tr>
          <td>Finance fee</td>
          <td>$129</td>
        </tr>
        <tr>
          <td>Option to purchase fee</td>
          <td>$249</td>
        </tr>
        <tr>
          <td>Total ammount payable</td>
          <td>$9879</td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>48 Months</td>
        </tr>
      </table>
      <h3>
        <strong>5.9% APR</strong>
        {' '}
        Representative
      </h3>
      <h5 class="text-bold">Discover More Models</h5>
    </div>
  </div>
);

export default Details;
