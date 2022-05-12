import React from 'react';

const Header = ({ onClick }) => (
  <div className="h-[60px] fixed top-0 w-full z-10 px-10 flex items-center justify-between text-white">
    <button onClick={onClick} type="button">
      <img src="./menu.svg" alt="menu-icon" className="w-10 h-10" />
    </button>
  </div>
);

export default Header;
