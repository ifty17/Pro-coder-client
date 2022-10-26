import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import LeftSideCategory from '../components/LeftSideCategory/LeftSideCategory';

const Main = () => {
    return (
      <div className='mx-5'>
        <Header></Header>
        
        <div className="flex">
          <div className="p-5 grid grid-cols-2 border">
            <LeftSideCategory></LeftSideCategory>
          </div>
          <div className="grid grid-cols-10 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Main;