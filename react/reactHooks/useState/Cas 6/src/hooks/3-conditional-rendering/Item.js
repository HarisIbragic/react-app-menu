// import { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';

// const Item = () => {
//   const [size, setSize] = useState(window.innerWidth);
//   const checkSize = () => {
//     setSize(window.innerWidth);
//   };

//   useEffect(() => {
//     // eslint-disable-next-line
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

// export default Item;

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div>
      <h1>Window</h1>
      <h2>{size}</h2>
    </div>
  );
};

export default Item;
