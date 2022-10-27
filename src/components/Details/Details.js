import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
                <button className="btn btn-primary">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;