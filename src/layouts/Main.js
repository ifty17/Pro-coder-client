import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftSideCategory from '../components/LeftSideCategory/LeftSideCategory';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <div>
          <div className="grid grid-cols-4">
            <LeftSideCategory></LeftSideCategory>
          </div>
          <div className="grid grid-cols-8">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Main;