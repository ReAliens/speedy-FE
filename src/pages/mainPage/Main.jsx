import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel';
// import { Route, Routes } from 'react-router-dom';
import ItemCard from '../../components/itemCard/Cards';
import { getItems } from '../../redux/items/itemsActions';
// import Details from '../details/Details';
import './Main.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
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
        <Carousel
          slidesToShow={3}
          slidesToScroll={items.length / 3}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              type="button"
              className="carousel-right-btn"
            >
              next
            </button>
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              type="button"
              className="carousel-left-btn"
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
          {/* <Routes>
            {items?.map((item) => (
              <Route
                path={`/details/${item.id}`}
                key={item.id}
                element={<Details item={item} />}
              />
            ))}
          </Routes> */}
        </Carousel>
      </div>
    </div>
  );
};
export default MainPage;
