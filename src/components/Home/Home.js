import React from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../../assects/homeimg.png'
import Header from '../Header/Header';




const Home = () => {
  
    return (
      <div>
        <Header></Header>
        <div className="flex items-center mt-3 justify-center flex-col sm:flex-col md:flex-row">
          <div className=" w-[90%] md:w-[50%]">
            <h1 className="text-5xl text-left py-5">
              Your dream to become a full stack developer is one step away!
            </h1>
            <p className="py-3">
              Best platform to learn Full stack development. Enroll today!
            </p>
            <div className="flex gap-5">
              <Link to={'/login'}>
                <button className="px-16 text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="px-16 text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <img src={homeimg} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    );
};

export default Home;