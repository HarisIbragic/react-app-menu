import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  const url = image && image.url; // RADI SAMO KAD JE TRUE!

  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'Default Name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

export default Product;
