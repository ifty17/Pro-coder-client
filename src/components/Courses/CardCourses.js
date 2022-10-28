import React from 'react';
import { Link } from 'react-router-dom';

const CardCourses = ({course}) => {
    const { image, name, price, rating, details, id } = course; 
    // console.log(id);
    return (
      <div className="card w-72  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {details.length > 200 ? (
              <>
                {details.slice(0, 100) + "....."}
                <Link to={`/courses/${id}`}>Read More</Link>{" "}
              </>
            ) : (
              <>{details}</>
            )}
          </p>
          <div className="card-actions justify-end">
            <p>Price: ${price}</p>
            <Link to={`/checkout/${id}`}>
              <button className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CardCourses;