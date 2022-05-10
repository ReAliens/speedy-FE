import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel';
import ItemCard from '../../components/itemCard/Cards';
import { getItems } from '../../redux/items/itemsActions';
import './Main.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className="flex flex-col justify-center w-screen h-[90vh]">
      <h1 className="font-bold text-center w-full pt-40 text-5xl">
        Latest Models
      </h1>
      <p className="text-center text-xs">Please Select your favourite model</p>
      <div>
        <Carousel
          slidesToShow={3}
          slidesToScroll={items.length / 3}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              type="button"
              className="bg-orange-400 w-16 h-12 rounded-l-[50%] "
            >
              <img
                src="./images/right-arrow.svg"
                alt=""
                className="carousel-arrow-left"
              />
            </button>
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              type="button"
              className="bg-orange-400 w-16 h-12 rounded-r-[50%] "
            >
              <img
                src="./images/lift-arrow.svg"
                alt=""
                className=" carousel-arrow-right"
              />
            </button>
          )}
          renderBottomCenterControls={false}
          disableEdgeSwiping="true"
          // wrapAround="true" // to make the carousel loop
          cellSpacing={100}
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
