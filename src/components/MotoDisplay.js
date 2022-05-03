import React from 'react';

export default function MotoDisplay(prop) {
  return (
    <div>
      <img src={prop.image} alt="moto" />
      <h3>{prop.name}</h3>
      <p>{prop.details}</p>
    </div>
  );
}
