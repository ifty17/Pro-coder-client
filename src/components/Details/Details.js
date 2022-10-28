import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const Details = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const { name, image, price, details, id } = courseDetails;

    const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [14, 12],
  };

    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div ref={ref}>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{details}</p>
              <p className="text-2xl">Price: ${price}</p>
              <Link to={`/checkout/${id}`}>
                <button className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                  Get premium access
                </button>
              </Link>
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
                <div style={{ width: 10, height: 10 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;