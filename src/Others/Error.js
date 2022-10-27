import React from 'react';
import error from '.././assects/error.png'
import Header from '../components/Header/Header';

const Error = () => {
    return (
      <div>
        <Header></Header>
        <div className=" md:mx-96">
        <img src={error} alt="" />
        </div>
      </div>
    );
};

export default Error;