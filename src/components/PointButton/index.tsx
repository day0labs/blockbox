import React, { useState } from "react";
import TogleButton from "../togleButton";

interface PointButtonProps {
  className?: string;
}

const PointButton: React.FC<PointButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full max-w-sm flex items-center justify-center">
      <button
        onClick={handleToggle}
        className={`flex items-center justify-center ${className} cursor-pointer`}
      >
        <svg
          className="w-8 h-8 text-gray-400 dark:text-gray-400 hover:bg-[#b9ff66]/75 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-1 transition duration-300 ease-in-out hover:fill-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      </button>

      <div
        className={`absolute mt-4 z-50 w-48 text-1xl font-semibold text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ${
          isOpen ? "block" : "hidden"
        } lg:hidden`}
        style={{
          top: "100%",
          left: "50%",
          transform: "translateX(-70%)",
        }}
      >
        <div className="px-3 py-2">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#baff66b7] dark:hover:bg-gray-700"
              >
                Inglés
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#baff66b7] dark:hover:bg-gray-700"
              >
                Español
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#baff66b7] dark:hover:bg-gray-700"
              >
                Francés
              </a>
            </li>
          </ul>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex items-center justify-between my-5">
          <p className="text-sm ml-3">Apariencia</p>
          <TogleButton className="hidden md:block lg:hidden mr-3" />
        </div>
      </div>
    </div>
  );
};

export default PointButton;
