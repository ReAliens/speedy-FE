import React from 'react';
import ItemCard from '../../components/Cards';
import data from '../../constants/Data';

const MainPage = () => {
  console.log('data');
  return (
    <div className="flex flex-col justify-center w-screen h-[90vh]">
      <h1 className="font-bold text-center w-full">Latest Models </h1>
      <p className="text-center">Please Select your favourite model</p>
      <div className="flex justify-center mt-10">
        {data.map((item) => (
          <ItemCard key={item.id} prop={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
