import React from 'react';
import { Link } from 'react-router-dom';

const CardCourses = ({course}) => {
    const { image, name, price, rating, details, id } = course; 
    return (
      <div className="card w-72  bg-base-100 shadow-xl image-full ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <Link to={`/courses/${id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CardCourses;