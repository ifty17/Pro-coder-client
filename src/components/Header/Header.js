import React from 'react';
import { Link } from 'react-router-dom';
import LeftSideCategory from '../LeftSideCategory/LeftSideCategory';
import logo1 from '../../assects/logo1.png'
import { useContext } from 'react';
import { AuthContext } from '../../authentication/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    
    
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
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

          <img src={logo1} alt="" className=" w-[40%] md:w-[15%] btn btn-ghost" />
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
          <>
            {user?.uid ? (
              <>
                <button onClick={handleLogOut} variant="light">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
              </>
            )}
          </>
          <>
            <img
              src={user?.photoURL}
              style={{ height: "40px" }}
              className="rounded-full m-3"
              alt=""
            />
          </>
        </div>
      </div>
    );
};

export default Header;