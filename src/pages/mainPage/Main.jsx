import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import Slider from 'react-slick';
import ItemCard from '../../components/itemCard/Cards';
import { getItems } from '../../redux/items/itemsActions';

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="bg-lime-500 rounded-r-full w-6 md:w-8 flex justify-end items-end"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img
        src="../images/back2.png"
        alt="back"
        className="w-12 cursor-pointer pr-2 rotate-180"
      />
    </div>
  );
};

function SamplePrevArrow(props) {
  const { onClick, style } = props;
  return (
    <div
      className="bg-lime-500 rounded-l-full w-6 md:w-8 flex justify-end items-end"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img
        src="../images/back2.png"
        alt="back"
        className="w-12 cursor-pointer pr-2"
      />
    </div>
  );
}

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(getItems());
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: items.length > 3 ? 3 : items.length,
    slidesToScroll: 2,
    nextArrow: (
      <div className="flex w-full">
        <SampleNextArrow />
      </div>
    ),
    prevArrow: (
      <div className="flex w-full z-10">
        <SamplePrevArrow />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: items.length > 2 ? 2 : items.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-[90vw]">
      <h1 className="font-bold text-center w-full text-5xl">Latest Models</h1>
      <p className="text-center text-xs">Please Select your favourite model</p>
      <div className="w-[80vw] text-center ml-20 mt-32">
        <Slider {...settings}>
          {items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default MainPage;
