// import React from 'react';
// import { useState } from 'react';

// const UseStateCounter = () => {
//   const [value, setValue] = useState(1);

//   const reset = () => {
//     setValue(1);
//   };

//   const increase = () => {
//     setValue(value + 1);
//   };

//   const decreae = () => {
//     setValue(value - 1);
//   };

//   return (
//     <>
//       <section>
//         <h2>Regular Counter</h2>
//         <h1>{value}</h1>
//         {/* DECREASE */}
//         <button className='btn' onClick={decreae}>
//           decrease
//         </button>
//         <button className='btn' onClick={reset}>
//           reset
//         </button>
//         <button className='btn' onClick={increase}>
//           increase
//         </button>
//       </section>
//     </>
//   );
// };

// export default UseStateCounter;

// import React, { useState } from 'react';

// const UseStateCounter = () => {
//   const [value, setValue] = useState(1);
//   const decrease = () => {
//     setValue(value - 1);
//   };
//   const increase = () => {
//     setValue(value + 1);
//   };
//   const reset = () => {
//     setValue(1);
//   };

//   return (
//     <section>
//       <h2>Counter</h2>
//       <h1>{value}</h1>
//       <button className='btn' onClick={decrease}>
//         decrease
//       </button>
//       <button className='btn' onClick={increase}>
//         increase
//       </button>
//       <button className='btn' onClick={reset}>
//         reset
//       </button>
//     </section>
//   );
// };

// export default UseStateCounter;

// ********************************************************

import React, { useState } from 'react';

const UseStateComplexCounter = () => {
  const [value, setValue] = useState(1);

  const decrease = () => {
    if (value <= 1) {
      setValue(1);
    } else {
      setValue(value - 1);
    }
  };

  const reset = () => {
    setValue(1);
  };

  const increase = () => {
    setValue(value + 1);
  };

  const complexCounter = () => {
    setTimeout(() => {
      setValue(valueTwo => {
        return valueTwo + 1;
      });
    }, 1000);
  };

  return (
    <section>
      <h2>Complex Counter</h2>
      <h2>{value}</h2>
      <button className='btn' onClick={decrease}>
        decrease
      </button>
      <button className='btn' onClick={reset}>
        reset
      </button>
      <button className='btn' onClick={increase}>
        increase
      </button>
      <button className='btn' onClick={complexCounter}>
        complexCounter
      </button>
    </section>
  );
};

export default UseStateComplexCounter;
