// import React, { useEffect, useState } from 'react';

// const UseEffectResize = () => {
//   const [size, setSize] = useState(window.innerWidth);

//   const checkSize = () => {
//     setSize(window.innerWidth);
//   };

//   useEffect(() => {
//     console.log('call useEffect');
//     window.addEventListener('resize', checkSize);
//     // PRAVILO: Kad god koristimo addEventListener moramo da ga i uklonimo: return () => {
//     return () => {
//       console.log('clean !');
//       window.removeEventListener('resize', checkSize);
//     };
//   }, []);

//   console.log('render');
//   return (
//     <>
//       <h1>window</h1>
//       <h2>Width: {size}px</h2>
//     </>
//   );
// };

// export default UseEffectResize;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectResize = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', changeSize);

    return () => {
      window.removeEventListener('resize', changeSize);
    };
  }, []);

  return (
    <>
      <h1>window</h1>
      <h2>Width: {size}</h2>
    </>
  );
};

export default UseEffectResize;
