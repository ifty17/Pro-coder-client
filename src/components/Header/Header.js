import React from "react";
import { Link } from "react-router-dom";
import LeftSideCategory from "../LeftSideCategory/LeftSideCategory";
import logo1 from "../../assects/logo1.png";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useState } from "react";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  const [toggle, setToggle] = useState('Dark');
  const handleToggle = (event) =>{
    const changed = event.target.checked;
    if(changed){
      setToggle('Light')
    }
    else{
      setToggle('Dark')
    }

  }

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
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text pr-2">{toggle}</span>
                <input
                  onChange={handleToggle}
                  type="checkbox"
                  className="toggle toggle-accent"
                />
              </label>
            </div>
            <li className="text-white hover:text-green-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-white hover:text-green-500">
              <Link to={"/courses"}>Course</Link>
            </li>
            <li className="text-white hover:text-green-500">
              <Link to={"/FAQ"}>FAQ</Link>
            </li>
            <li className="text-white hover:text-green-500">
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <div className="md:hidden">
              <LeftSideCategory></LeftSideCategory>
            </div>
          </ul>
        </div>

        <img src={logo1} alt="" className=" w-[15%] md:w-[15%]" />
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl text-white hover:text-green-500"
        >
          Pro Coder
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="text-white hover:text-green-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-white hover:text-green-500">
            <Link to={"/courses"}>Course</Link>
          </li>
          <li className="text-white hover:text-green-500">
            <Link to={"/FAQ"}>FAQ</Link>
          </li>
          <li className="text-white hover:text-green-500">
            <Link to={"/blogs"}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control hidden md:block">
          <label className="label cursor-pointer">
            <span className="label-text pr-2 text-white hover:text-green-500">
              {toggle}
            </span>
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle toggle-accent"
            />
          </label>
        </div>
        {user?.uid ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn btn-xs text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="btn btn-xs">Login</button>
            </Link>
          </>
        )}
        <div
          className="tooltip tooltip-bottom mx-3"
          data-tip={user?.displayName}
        >
          {user?.photoURL ? (
            <img
              className="rounded-full "
              style={{ height: "30px" }}
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <FaUser></FaUser>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
