// import React, { useState } from 'react';

// const UseStateBasic = () => {
//   //     'on'
//   const [text, setText] = useState('On');

//   const handleClick = () => {
//     text === 'On' ? setText('Off') : setText('On');
//   };

//   return (
//     <>
//       <h1>{text}</h1>
//       <button className='btn' onClick={handleClick}>
//         Change
//       </button>
//     </>
//   );
// };

// export default UseStateBasic;

import React from 'react';
import { useState } from 'react';

const UseStateBasic = () => {
  const [value, setValue] = useState('On');
  const handeClick = () => {
    value === 'On' ? setValue('Off') : setValue('On');
  };
  return (
    <>
      <h2>{value}</h2>
      <button className='btn' onClick={handeClick}>
        Off/On
      </button>
    </>
  );
};

export default UseStateBasic;
