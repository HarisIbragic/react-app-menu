// import React, { useEffect, useState } from 'react';

// const HariUseEffect = () => {
//   const [value, setValue] = useState(0);

//   // SEMA ZA useEffect(()=>{},[])
//   useEffect(() => {
//     console.log('call useEffect');
//     document.title = `New message (${value})`;
//   });

//   return (
//     <>
//       <h2>{value}</h2>
//       <button className='btn' onClick={() => setValue(value + 1)}>
//         New Message
//       </button>
//     </>
//   );
// };

// export default HariUseEffect;

// ***************************************************

// import React, { useEffect, useState } from 'react';

// const HariUseEffect = () => {
//   const [value, setValue] = useState(0);

//   //===============================
//   // PRIMER DA HUKOVE NE MOZEMO STAVITI U CONDITIONAL(GRANE)
//   //===============================
//   // // Sada je zadatak da nam prikaze ovo New Message samo ako je poruka veca od 0:
//   // // Ovo NE MOZEMO URADITI jer Hookove NE MOZEMO STAVITI U CONDITIONALL(uslov):
//   // if (value > 0) {
//   //   //
//   //   useEffect(() => {
//   //     console.log('call useEffect');
//   //     // Ovo je gore u titlu kao za obavestenja:
//   //     document.title = `New Messages (${value})`;
//   //   });
//   // }

//   useEffect(() => {
//     console.log('call useEffect');

//     if (value >= 1) {
//       document.title = `New message (${value})`;
//     }
//   });

//   console.log('render component');

//   return (
//     <>
//       <h2>{value}</h2>
//       <button className='btn' onClick={() => setValue(value + 1)}>
//         New Message
//       </button>
//     </>
//   );
// };

// export default HariUseEffect;

// ***************************************************

// import React, { useEffect, useState } from 'react';

// const UseEffectSecound = () => {
//   const [value, setValue] = useState(0);

//   const newMessage = () => {
//     setValue(value + 1);
//   };

//   useEffect(() => {
//     console.log('call useEffect');
//     if (value >= 1) {
//       document.title = `New Message (${value})`;
//     }
//   }, [value]);

//   console.log('render component');

//   return (
//     <>
//       <h1>{value}</h1>
//       <button className='btn' onClick={newMessage}>
//         new Message
//       </button>
//     </>
//   );
// };

// export default UseEffectSecound;

// import React, { useEffect, useState } from 'react';

// const UseEffectSecound = () => {
//   const [value, setValue] = useState(0);
//   const newMessage = () => {
//     setValue(value + 1);
//   };

//   useEffect(() => {
//     if (value >= 1) {
//       document.title = `New message (${value})`;
//     }
//   }, [value]);

//   return (
//     <>
//       <h2>{value}</h2>
//       <button className='btn' onClick={newMessage}>
//         New Message
//       </button>
//     </>
//   );
// };

// export default UseEffectSecound;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const newMessage = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    if (value >= 1) {
      document.title = `New message (${value})`;
    }
  }, [value]);
  return (
    <>
      <h2>{value}</h2>
      <button className='btn' onClick={newMessage}>
        New message
      </button>
    </>
  );
};

export default UseEffectBasics;
