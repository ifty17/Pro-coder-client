import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";

const Details = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const { name, image, price, details, id } = courseDetails;

    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{details}</p>
              <p>${price}</p>
              <Link to={`/checkout/${id}`}>
                <button className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                  Get premium access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;