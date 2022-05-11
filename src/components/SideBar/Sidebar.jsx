import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../redux/auth/authActions';

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
      <div className="overflow-y-auto py-4 h-full px-3 bg-gray-50 rounded dark:bg-gray-800 fixed top-0 left-0 pt-16 w-[25vw]">
        <ul className="space-y-2">
          <li>
            <Link
              to="/home"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Cars List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>Log in</span>
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>Sign up</span>
            </Link>
          </li>
          {selector.data && (
            <>
              <li>
                <a
                  href="/add-reservation"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Reserve Car
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/reservations"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    My Reservations
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/add-car"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add new Car
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/delete-car"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Delete Car
                  </span>
                </a>
              </li>
              <li>
                <button type="button" onClick={() => logout()}>
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    )
  );
};

export default Sidebar;
