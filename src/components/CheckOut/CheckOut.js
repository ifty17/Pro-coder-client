import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
const CheckOut = () => {

  const checkout = useLoaderData();
  console.log(checkout);
  const {name, image, details, price} = checkout;

  return (
    <div className="hero min-h-screen bg-base-200 ">
      {/* <h1>This is check Out page</h1> */}
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{name}</h1>
          <img className="w-56 py-5" src={image} alt="" />
          <p className="text-2xl">Price: ${price}</p>
          <p className="py-6">{details}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="your address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="number"
                placeholder="your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="text-green-700 block hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                <div className="flex items-center justify-center gap-2">
                  <span>Confirm Checkout</span>
                  <FaArrowCircleRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;