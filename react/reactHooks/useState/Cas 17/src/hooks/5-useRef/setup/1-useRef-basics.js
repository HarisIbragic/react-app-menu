import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const UseRefBasic = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onClick={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>

      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasic;
