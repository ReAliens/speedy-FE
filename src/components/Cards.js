import React from 'react';

export default function Cards(prop) {
  const { image, title, description } = prop;
  return (
    <div>
      <img src={image} alt="moto" />
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
}
