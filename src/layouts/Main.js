import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import LeftSideCategory from '../components/LeftSideCategory/LeftSideCategory';

const Main = () => {
    return (
      <div>
        <Header></Header>

        <div className=" my-20 flex">
          <div className="mx-10 pl-10  hidden md:block ">
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