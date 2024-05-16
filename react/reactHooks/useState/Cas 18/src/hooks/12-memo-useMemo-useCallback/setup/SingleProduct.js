import React, { useEffect } from 'react';

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log('single product');
  });

  let { name, price } = fields;
  price = price / 100;

  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>{price}$</p>
      <button className='btn' onClick={addToCart}>
        Add to cart
      </button>
    </article>
  );
};

export default SingleProduct;
