// import React from 'react';
// import { useState } from 'react';

// const ShortCircuit = () => {
//   const [text, setText] = useState('Haris');
//   const firstValue = text || 'Pozdrav svima!';
//   const secondValue = text && 'Pozdrav sivma!';

//   return (
//     <>
//       <h1>{text || 'Prof. Asmir'}</h1>
//       {text && <h1>1. Pozdrav svima!</h1>}
//       {!text && <h1>2. Pozdrav svima!</h1>}
//     </>
//   );
// };

// export default ShortCircuit;

// *****************************************************

// import React from 'react';
// import { useState } from 'react';

// const ShortCircuit = () => {
//   const [text, setText] = useState('');
//   const [isError, setIserror] = useState(false);

//   return (
//     <>
//       <h1>{text || 'Prof. Asmir'}</h1>
//       <button className='btn' onClick={() => setIserror(!isError)}>
//         toggle error
//       </button>
//       {isError && <h1>Error...</h1>}
//       {isError ? (
//         <p>there is an error...</p>
//       ) : (
//         <div>
//           <h2>there is no Error</h2>
//         </div>
//       )}
//       {}
//     </>
//   );
// };

// export default ShortCircuit;

import React from 'react';
import { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIserror] = useState(false);

  return (
    <>
      <h1>{text || 'Hello world'}</h1>
      <button className='btn' onClick={() => setIserror(!isError)}>
        Toggle
      </button>
      {isError && <h1>Error</h1>}
      {isError ? <p>ovde je error</p> : <p>ovde nije error</p>}
    </>
  );
};

export default ShortCircuit;
