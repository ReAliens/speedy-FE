import React, { Component } from 'react'
import data from '../../constants/Data';

export default class Details extends Component {
  render() {
    let getId = this.props.match.params.id;
    let getData = data.carDetails[getId - 1]
    return (
      <div>
        <div>
          <h1>{getData}.title</h1>
        </div>
      </div>
    )
  }
}


// const Details = () => (
//   <div class="flex mt-28 place-content-center">
//     <div>
//       <img
//         src="https://pngimg.com/uploads/ferrari/ferrari_PNG10657.png"
//         class="max-w-3xl max-h-fit"
//         alt="ferrari"
//       />
//     </div>
//     <div class="ml-20">
//       <h2 class="font-bold text-center text-3xl">Ferrai</h2>
//       <h6 class="mb-8 text-center">discount offer</h6>
//       <table class="table-fixed">
//         <tr class="bg-gray-300">
//           <td class="px-2 py-2">Finance fee</td>
//           <td>$129</td>
//         </tr>
//         <tr>
//           <td class="px-2 py-2">Option to purchase fee</td>
//           <td>$249</td>
//         </tr>
//         <tr class="bg-gray-300">
//           <td class="px-2 py-2">Total ammount payable</td>
//           <td>$9879</td>
//         </tr>
//         <tr>
//           <td class="px-2 py-2">Duration</td>
//           <td>48 Months</td>
//         </tr>
//       </table>
//       <h3 class="mt-4">
//         <strong>5.9% APR</strong>
//         {' '}
//         Representative
//       </h3>
//       <h6 class="font-bold mt-4 text-right">Discover More Models</h6>
//     </div>
//   </div>
// );

// export default Details;

// import React, {components} from "react";

// export default class Details {
//   render() {
//     return (
//       <div>
//         <div>
//           <h1>{this.props.title}</h1>
//         </div>
//       </div>
//     )
//   }
// }
