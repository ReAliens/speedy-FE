import React from 'react';

const Toast = ({ message, sign }) => {
  return (
    <div className="w-screen h-screen absolute bg-transparent">
      <div className="absolute top-5 right-5 left-0 sm:left-auto w-full grid justify-center px-4 sm:absolute">
        <div className="space-y-2 left-0 sm:left-auto w-full grid justify-center sm:justify-end px-4 absolute sm:right-0">
          {sign === 'Success' ? (
            <div className="min-h-[16] w-80 px-4 py-2 bg-white rounded-md shadow-lg border border-gray-200 sm:right-0">
              <div className="flex space-x-2 text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {sign}
              </div>
              <div className="text-red-700 max-w-xs">{message}</div>
            </div>
          ) : (
            <div className="min-h-[16] w-80 px-4 py-2 bg-white rounded-md shadow-lg border border-gray-200 sm:right-0">
              <div className="flex space-x-2 text-red-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {sign}
              </div>
              <div className="text-red-700 max-w-xs">{message}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toast;
