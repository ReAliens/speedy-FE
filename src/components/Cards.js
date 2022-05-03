import React from 'react';

export default function Cards(prop) {
  const { image, title, description } = prop;
  return (
    <div className="card">
      <div className="sub-card grid grid-cols-2 gap-4">
        <div className="img bg-teal-600 rounded-full ... w-40">
          <img src={image} alt="moto w-50" />
        </div>
        <div className="description">
          <h3 className="text-center pt-20">{ title }</h3>
          <p className="text-center">{ description }</p>
        </div>
      </div>
    </div>
  );
}
