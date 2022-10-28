import React from 'react';
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
            <p className='py-3'>Passion + Dedication + Hard Word = Success!</p>
            <div>
            
          </div>
        </div>
          <div className="">
            <img src={homeimg} alt="" />
          </div>
      </div>
      </div>

    );
};

export default Home;