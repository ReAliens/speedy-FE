import React from 'react';

export default function Cards(prop) {
  return (
    <div>
      /* eslint-disable react/destructuring-assignment */
      <img src={prop.image} alt="moto" />
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
    </div>
  );
}
