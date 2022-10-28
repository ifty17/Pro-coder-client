import React from 'react';
import homeimg from '../../assects/homeimg.png'
import Header from '../Header/Header';
import ReactToPdf from "react-to-pdf";



const Home = () => {
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [4, 2],
  };
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
              <ReactToPdf
                targetRef={ref}
                filename="div-blue.pdf"
                options={options}
                x={0.5}
                y={0.5}
                scale={0.8}
              >
                {({ toPdf }) => (
                  <button
                    className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={toPdf}
                  >
                    Download course documentation
                  </button>
                )}
              </ReactToPdf>
              <div
                style={{ width: 10, height: 10,  }}
                ref={ref}
              ></div>
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