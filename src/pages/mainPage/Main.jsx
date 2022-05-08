import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel';
import ItemCard from '../../components/itemCard/Cards';
import { getItems } from '../../redux/items/itemsActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  useEffect(() => {
    if (!items.length) {
      dispatch(getItems());
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center w-screen h-[90vh]">
      <h1 className="font-bold text-center w-full pt-44 text-5xl">
        Latest Models
      </h1>
      <p className="text-center text-xs">Please Select your favourite model</p>
      <div>
        <Carousel slidesToShow={3} slidesToScroll={items.length / 3}>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default MainPage;
