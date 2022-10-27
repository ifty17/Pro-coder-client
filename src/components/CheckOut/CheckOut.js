import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkout = useLoaderData();
  console.log(checkout);
  const {name, image, price, details} = checkout;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
              {details}
            </p>
            <p>${price}</p>
            <button className="btn btn-primary">Confirm Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
