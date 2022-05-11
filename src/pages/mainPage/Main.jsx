import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel';
import ItemCard from '../../components/itemCard/Cards';
import { getItems } from '../../redux/items/itemsActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className="flex flex-col justify-center w-screen h-[90vh] pl-56 pr-12 pt-24 ">
      <h1 className="font-bold text-center w-full pt-64 text-5xl">
        Latest Models
      </h1>
      <p className="text-center text-xs">Please Select your favourite model</p>
      <div>
        <Carousel
          slidesToShow={3}
          slidesToScroll={3}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              type="button"
              className="bg-orange-400 mt-96 w-16 h-12 rounded-l-[50%] "
            >
              next
            </button>
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              type="button"
              className="bg-orange-400 mt-96 w-16 h-12 rounded-r-[50%] "
            >
              back
            </button>
          )}
          renderBottomCenterControls={false}
          disableEdgeSwiping="true"
        >
          {items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default MainPage;
