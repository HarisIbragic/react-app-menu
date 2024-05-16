// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const ShowHide = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <button className='btn' onClick={() => setShow(!show)}>
//         show/hide
//       </button>

//       {show && <Item />}
//     </>
//   );
// };

// const Item = () => {
//   const [size, setSize] = useState(window.innerWidth);

//   const checkSize = () => {
//     setSize(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', checkSize);

//     return () => window.removeEventListener('resize', checkSize);
//   }, []);

//   return (
//     <div style={{ marginTop: '2rem' }}>
//       <h1>Window</h1>
//       <h2>Size : {size}px</h2>
//     </div>
//   );
// };

// export default ShowHide;

// HARI:
import React, { useState } from 'react';
import Item from './Item';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>

      {show && <Item />}
    </>
  );
};
// const Item = () => {
//   const [size, setSize] = useState(window.innerWidth);
//   const checkSize = () => {
//     setSize(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener('resize', checkSize);
//     return () => window.removeEventListener('resize', checkSize);
//   }, []);

//   return (
//     <div>
//       <h2>Window</h2>
//       <h3>size: {size}px</h3>
//     </div>
//   );
// };
export default ShowHide;
