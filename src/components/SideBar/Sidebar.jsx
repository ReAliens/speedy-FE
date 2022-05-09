import React from 'react';

const Sidebar = ({ isOpen }) => isOpen && (
<div className="overflow-y-auto py-4 h-full px-3 bg-gray-50 rounded dark:bg-gray-800 fixed top-0 left-0 pt-16 w-[25vw]">
  <ul className="space-y-2">
    <li>
      <a
        href="/"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="ml-3">Cars List</span>
      </a>
    </li>
    <li>
      <a
        href="/reservations"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 whitespace-nowrap">Reserve Car</span>
      </a>
    </li>
    <li>
      <a
        href="/"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 whitespace-nowrap">
          My Reservations
        </span>
      </a>
    </li>
    <li>
      <a
        href="/"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 whitespace-nowrap">Add new Car</span>
      </a>
    </li>
    <li>
      <a
        href="/"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 whitespace-nowrap">Delete Car</span>
      </a>
    </li>
  </ul>
</div>
);

export default Sidebar;
