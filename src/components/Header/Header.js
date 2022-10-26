import React from 'react';
import { Link } from 'react-router-dom';
import LeftSideCategory from '../LeftSideCategory/LeftSideCategory';
import logo1 from '../../assects/logo1.png'

const Header = () => {
    
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/courses"}>Course</Link>
              </li>
              <li>
                <Link to={"/FAQ"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <div className="md:hidden">
                <LeftSideCategory></LeftSideCategory>
              </div>
            </ul>
          </div>

          <img src={logo1} alt="" className="w-[15%] btn btn-ghost" />
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Pro Coder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Course</Link>
            </li>
            <li>
              <Link to={"/FAQ"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'} className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
            Login
          </Link>
        </div>
      </div>
    );
};

export default Header;