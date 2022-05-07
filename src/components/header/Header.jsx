import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logoutAction from '../../redux/auth/loginAction';

const Header = ({ onClick }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <div className="h-[60px] fixed top-0 w-full z-10 px-6 flex items-center justify-between bg-orange-400 text-white">
      <button onClick={onClick} type="button">
        <img src="./menu.png" alt="menu-icon" className="w-10 h-6" />
      </button>
      <div className="w-2/5 flex justify-around ">
        <Link to="/login">
          <span> Log in </span>
        </Link>
        <Link to="/signup">
          <span> Sign up </span>
        </Link>
        <button onClick={() => logout()} type="button">
          log out
        </button>
      </div>
    </div>
  );
};

export default Header;
