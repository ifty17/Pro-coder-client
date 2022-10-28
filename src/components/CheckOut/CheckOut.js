import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

  const checkout = useLoaderData();
  console.log(checkout);
  const {name, image, details, price} = checkout;

  return (
    <div>
      <h1>checkout</h1>
    </div>
  );
};

export default CheckOut;