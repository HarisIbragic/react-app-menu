import React from 'react';

const Car = (img, title, owner) => {
  return (
    <article className='car'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{owner}</h5>
    </article>
  );
};

export default Car;
