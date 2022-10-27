import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftSideCategory from '../components/LeftSideCategory/LeftSideCategory';

const Main = () => {
    return (
      <div>
        <Header></Header>

        <div className=" flex">
          <div className="mx-10 mt-5 pl-10  hidden md:block ">
            <LeftSideCategory></LeftSideCategory>
          </div>

          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Main;