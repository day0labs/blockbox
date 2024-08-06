import { useState, useRef, useEffect } from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { Popover } from "flowbite";
import { IoMdArrowDropdown } from "react-icons/io";
import TogleButton from "../togleButton/togleButton";
import PointButton from "../PointButton/pointButton";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  // const popover = useRef(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    if (popoverRef.current) {
      new Popover(popoverRef.current);
    }
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-end justify-between mx-auto p-4">
        {" "}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a
            href="https://flowbite.com/"
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
          </a>
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
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#b9ff66] focus:border-[#b9ff66] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
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
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            onClick={toggleSearch}
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
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
            isSearchOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto transition-all duration-300`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3 pointer-events-none">
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
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#b9ff66] focus:border-[#b9ff66] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar..."
            />
          </div>

          <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="w-96 text-left md:w-auto md:text-left">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded bg-[#baff66b7] md:bg-transparent md:text-[#b9ff66] md:p-0 md:dark:text-[#b9ff66] hover:text-white md:hover:text-[#b9ff66] transition-colors duration-300"
                aria-current="page"
              >
                Documentación
              </a>
            </li>
            <hr className="w-96 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <li className="w-96 text-left md:w-auto md:text-left">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#baff66b7] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Ejemplos
              </a>
            </li>
            <hr className="w-96 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <li className="w-96 text-left md:w-auto md:text-left">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#baff66b7] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Motor
              </a>
            </li>
            <hr className="w-96 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <li className="w-96 text-left md:w-auto md:text-left">
              <a
                href="#"
                className="block py-2 px-3 md:mr-5 text-gray-900 rounded hover:text-[#baff66b7] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Precios
              </a>
            </li>
            <hr className="w-96 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
            <div className="flex flex-col items-center space-y-4 py-2 md:hidden">
              <button
                type="button"
                onClick={toggleLanguageMenu}
                className="text-gray-500 w-96 text-left px-3 md:text-left dark:text-gray-400 hover:text-gray-600 focus:outline-none items-center flex transition-colors duration-300"
              >
                <IoLanguageOutline className="w-6 h-6 mr-1" />
                <IoMdArrowDropdown className="w-4 h-4" />
              </button>
              <div
                className={`flex items-center justify-between my-5 bg-gray-100 py-2 px-5 rounded-lg ${
                  isLanguageMenuOpen ? "block" : "hidden"
                } md:hidden`}
              >
                <div className="flex flex-col space-y-2 w-[350px] ">
                  <li className="w-64 text-left md:w-auto md:text-left">
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:text-[#baff66b7] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                    >
                      Español
                    </a>
                  </li>
                  <li className="w-64 text-left md:w-auto md:text-left">
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:text-[#baff66b7] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                    >
                      Ingles
                    </a>
                  </li>
                  <li className="w-64 text-left md:w-auto md:text-left">
                    <a
                      href="#"
                      className="block py-2 px-3 md:mr-5 text-gray-900 rounded hover:text-[#baff66b7] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                    >
                      Portugués
                    </a>
                  </li>
                </div>
              </div>
              <div className="flex items-center justify-between my-5 bg-gray-200 py-2 px-5 rounded-lg">
                <p className="text-sm w-64 text-left md:w-auto md:text-left text-[#97979F]">
                  Apariencia
                </p>
                <TogleButton className="rounded-lg flex text-right py-2 px-3 " />
              </div>
            </div>
          </ul>

          <PointButton className="hidden md:block lg:hidden ml-5" />

          <div className="border-l border-gray-300 mr-8 h-6 hidden lg:block"></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse md:order-2">
            <button
              data-popover-target="popover-language"
              data-popover-placement="bottom"
              // ref={popoverRef}
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-600 focus:outline-none items-center hidden lg:flex"
            >
              <IoLanguageOutline className="w-6 h-6 mr-1" />
              <IoMdArrowDropdown className="w-4 h-4 mr-1" />
            </button>
            <div className="border-l border-gray-300 h-6 hidden lg:block"></div>
            <TogleButton className="hidden lg:block" />
          </div>
        </div>
      </div>
      <div
        data-popover
        id="popover-language"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-48 text-1xl font-semibold text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
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
        <div data-popper-arrow></div>
      </div>
    </nav>
  );
};

export default Navbar;
