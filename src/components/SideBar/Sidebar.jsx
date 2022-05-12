import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../redux/auth/authActions';
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutAction());
    navigate('/');
  };
  return (
    isOpen && (
      <div className=" side-bar overflow-y-auto py-4 h-full px-3 bg-gray-50 rounded dark:bg-gray-800 fixed top-0 left-0 pt-16 w-[17vw] ">
        <ul className="space-y-2">
          <li>
            <Link
              to={selector.data ? '/' : '/home'}
              className=" side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              <span className="ml-3">Cars List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className=" side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>Log in</span>
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>Sign up</span>
            </Link>
          </li>
          {selector.data && (
            <>
              <li>
                <a
                  href="/add-reservation"
                  className="side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Reserve Car
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/reservations"
                  className="side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    My Reservations
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/add-car"
                  className="side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add new Car
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/delete-car"
                  className="side-bar-link flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Delete Car
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => logout()}
                  className="side-bar-link logout"
                >
                  Log out
                </button>
              </li>
            </>
          )}
          <ul className="social-media-list">
            <li className="social-media">
              <img src="./images/facebook.svg" alt="facebook" />
            </li>
            <li className="social-media">
              <img src="./images/twitter.svg" alt="twitter" />
            </li>
            <li className="social-media">
              <img src="./images/instagram.svg" alt="instagram" />
            </li>
          </ul>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
