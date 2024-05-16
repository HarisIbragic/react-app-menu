import React, { useEffect, useState } from 'react';

const UseEffectResize = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('call useEffect');
    window.addEventListener('resize', checkSize);
    // PRAVILO: Kad god koristimo addEventListener moramo da ga i uklonimo: return () => {
    return () => {
      console.log('clean !');
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>Width: {size}px</h2>
    </>
  );
};

export default UseEffectResize;
