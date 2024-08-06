import React, { useState, useRef, useEffect } from "react";
import { Popover } from "flowbite"; // Asegúrate de tener Flowbite instalado
import TogleButton from "../togleButton/togleButton";

interface PointButtonProps {
  className?: string;
}

const PointButton: React.FC<PointButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popoverInstance = useRef<Popover | null>(null);

  const handleMouseEnter = (): void => {
    setIsOpen(true);
  };

  const handleMouseLeave = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (popoverRef.current && buttonRef.current) {
      popoverInstance.current = new Popover(popoverRef.current);

      buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
      buttonRef.current.addEventListener("mouseleave", handleMouseLeave);
      popoverRef.current.addEventListener("mouseenter", handleMouseEnter);
      popoverRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        if (buttonRef.current) {
          buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
          buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
        if (popoverRef.current) {
          popoverRef.current.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );
          popoverRef.current.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
        if (popoverInstance.current) {
          popoverInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="relative w-full max-w-sm flex items-center justify-center">
      <button
        ref={buttonRef}
        className={`flex items-center justify-center ${className}`}
        data-popover-target="dropdown-popover"
        data-popover-placement="bottom"
      >
        <svg
          className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      </button>

      <div
        data-popover
        id="dropdown-popover"
        role="tooltip"
        className={`absolute z-10 w-48 text-1xl font-semibold text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm mr-4 ${isOpen}`}
        ref={popoverRef}
        style={{
          top: "100%",
          left: "50%",
          transform: "translateX(-calc(50% + 1rem))",
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

        <div data-popper-arrow></div>
      </div>
    </div>
  );
};

export default PointButton;
