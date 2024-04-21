import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className={`flex items-center flex-shrink-0 text-white mr-6 ${isMobileMenuOpen ? 'sm:block' : ''}`}>
            <span className="font-semibold text-4xl tracking-tight text-sky-500"> <Link to="/">Centria Times</Link> </span>
          </div>
          <div className={`flex items-center ${isMobileMenuOpen ? 'justify-end' : 'justify-between'} flex-shrink-0 text-white mr-6 lg:hidden`}>
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? "hidden" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${isMobileMenuOpen ? "" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className={`hidden lg:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ${isMobileMenuOpen ? 'hidden lg:flex' : ''}`}>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Home
              </Link>
              <Link
                to="/Entertainment"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Entertainment
              </Link>
              <Link
                to="/Technology"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Technology
              </Link>
              <Link
                to="/Sports"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Sports
              </Link>
              <Link
                to="/Business"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Business
              </Link>
              <Link
                to="/Health"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Health
              </Link>
              <Link
                to="/Science"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Science
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isMobileMenuOpen ? "" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col items-center">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/Entertainment"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Entertainment
          </Link>
          <Link
            to="/Technology"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Technology
          </Link>
          <Link
            to="/Sports"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Sports
          </Link>
          <Link
            to="/Business"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Business
          </Link>
          <Link
            to="/Health"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Health
          </Link>
          <Link
            to="/Science"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Science
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
