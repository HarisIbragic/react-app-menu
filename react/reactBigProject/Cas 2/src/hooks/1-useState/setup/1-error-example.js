import React from 'react';

const ErrorExample = () => {
  let title = 'pozdrav!';

  const handleClick = () => {
    title = 'Hello word';
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button className='btn' type='button' onClick={handleClick}>
        click me
      </button>
    </>
  );
};

export default ErrorExample;
