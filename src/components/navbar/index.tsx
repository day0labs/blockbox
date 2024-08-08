import { useState } from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import TogleButton from "../togleButton";
import PointButton from "../PointButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false);
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);
  const [isLanguageMenuVisibleMovile, setIsLanguageMenuVisibleMovile] =
    useState(false);

  const handleLanguageMenuToggleDesktop = () => {
    setIsLanguageMenuVisible(!isLanguageMenuVisible);
  };

  const handleLanguageMenuToggleMovile = () => {
    setIsLanguageMenuVisibleMovile(!isLanguageMenuVisibleMovile);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleHamburgerOpenToggle = () => {
    setisHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="to-transparent absolute z-[100] w-full">
      <div className="max-w-screen-2xl flex flex-wrap items-end justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1722545657/Captura_de_pantalla__1479_-removebg-preview_ubrgkg.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <p className="mr-5">Blockbox</p>
            </span>
          </Link>
          <div className="relative hidden md:block ml-4 items-center">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#b9ff66] focus:border-[#b9ff66] focus:outline-none"
              placeholder="Buscar..."
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="text-gray-500 dark:text-gray-400 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            onClick={handleSearchToggle}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={handleHamburgerOpenToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`relative ${
            isSearchOpen || isHamburgerOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto transition-all duration-300`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#b9ff66] focus:border-[#b9ff66] focus:outline-none"
              placeholder="Buscar..."
            />
          </div>

          <ul className="bg-[#49741421] md:bg-transparent flex flex-col items-center p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:white:bg-gray-900 dark:border-gray-700">
            <li className="w-full sm:w-80 text-left md:w-auto md:text-left">
              <Link
                to="/documentacion"
                className="block py-2 px-3 text-white rounded bg-[#baff66b9] md:bg-transparent md:text-[#b9ff66] md:p-0 md:dark:text-[#b9ff66] hover:text-white md:hover:text-[#b9ff66] transition-colors duration-300"
                aria-current="page"
              >
                Documentación
              </Link>
            </li>
            <hr className="w-full sm:w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <li className="w-full sm:w-80 text-left md:w-auto md:text-left">
              <Link
                to="/ejemplos"
                className="block py-2 px-3 text-white rounded hover:text-[#baff66b9] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Ejemplos
              </Link>
            </li>
            <hr className="w-full sm:w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <li className="w-full sm:w-80 text-left md:w-auto md:text-left">
              <Link
                to="/motor"
                className="block py-2 px-3 text-white rounded hover:text-[#baff66b9] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Motor
              </Link>
            </li>
            <hr className="w-full sm:w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <li className="w-full sm:w-80 text-left md:w-auto md:text-left">
              <Link
                to="/precios"
                className="block py-2 px-3 md:mr-5 text-white rounded hover:text-[#baff66b9] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Precios
              </Link>
            </li>
            <hr className="w-full sm:w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <div className="relative z-[100] flex flex-col items-center space-y-4 py-2 md:hidden w-full">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleLanguageMenuToggleMovile}
                  className="text-white dark:text-gray-400 hover:text-gray-300 focus:outline-none flex items-center space-x-2 mb-2 w-full sm:w-auto"
                >
                  <IoLanguageOutline className="w-6 h-6" />
                  <IoMdArrowDropdown className="w-4 h-4" />
                </button>
                <div
                  className={` top-full items-center mt-2 bg-white border border-gray-200 rounded-lg shadow-lg ${
                    isLanguageMenuVisibleMovile ? "block" : "hidden"
                  } dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
                  style={{ width: "200px", zIndex: 101 }}
                >
                  <div className="px-3 py-2">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#d0f0c0] dark:hover:bg-gray-700"
                        >
                          Inglés
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#d0f0c0] dark:hover:bg-gray-700"
                        >
                          Español
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#d0f0c0] dark:hover:bg-gray-700"
                        >
                          Francés
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-[20rem] flex flex-col items-center space-y-1 bg-slate-300 py-2 px-4 rounded-lg">
                <p className="text-sm text-center text-[#757580] w-full">
                  Apariencia
                </p>
                <TogleButton className="rounded-lg flex text-right py-2 px-3 w-full" />
              </div>
            </div>
          </ul>

          <PointButton className="hidden md:block lg:hidden ml-5" />

          <div className="border-l border-gray-300 mr-8 h-6 hidden lg:block"></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse md:order-2">
            <button
              type="button"
              onClick={handleLanguageMenuToggleDesktop}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-600 focus:outline-none items-center hidden lg:flex"
            >
              <IoLanguageOutline className="w-6 h-6 mr-1" />
              <IoMdArrowDropdown className="w-4 h-4 mr-1" />
            </button>
            <div
              className={`absolute  top-full right-0 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg ${
                isLanguageMenuVisible ? "block" : "hidden"
              } dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
              style={{ width: "200px", zIndex: 101 }}
            >
              <div className="px-3 py-2">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#d0f0c0] dark:hover:bg-gray-700"
                    >
                      Inglés
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#d0f0c0] dark:hover:bg-gray-700"
                    >
                      Español
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#d0f0c0] dark:hover:bg-gray-700"
                    >
                      Francés
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-l border-gray-300 h-6 hidden lg:block"></div>
            <TogleButton className="hidden lg:block " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
