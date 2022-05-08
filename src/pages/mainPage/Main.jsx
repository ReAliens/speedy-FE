import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemCard from '../../components/itemCard/Cards';
import { getItems } from '../../redux/items/itemsActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  console.log(items);

  return (
    <div className="flex flex-col justify-center w-screen h-[90vh]">
      <h1 className="font-bold text-center w-full pt-44 text-5xl">
        Latest Models
      </h1>
      <p className="text-center text-xs">Please Select your favourite model</p>
      <div className="flex justify-center mt-10">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default MainPage;
