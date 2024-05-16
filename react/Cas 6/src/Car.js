// Kad hocemo da exportujemo komponente ovako cemo raditi:

// SKRACENICA ZA KOMPONENTE 'rafce':
import React from 'react';

const Car = props => {
  const { img, title, owner } = props;
  return (
    <article className='car'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{owner}</h5>
    </article>
  );
};

export default Car;
