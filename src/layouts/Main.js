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
          <div className="p-5 grid grid-cols-2 border">
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