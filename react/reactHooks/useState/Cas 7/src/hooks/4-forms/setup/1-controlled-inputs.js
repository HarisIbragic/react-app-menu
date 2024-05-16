// import React from 'react';

// const ControlledInputs = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('Radi! ');
//   };
//   return (
//     <>
//       <article>
//         <form className='form' onSubmit={handleSubmit}>
//           <div className='form-control'>
//             <label htmlFor='firstName'>Name : </label>
//             <input type='text' name='firstName' id='firstName' />
//           </div>

//           <div className='form-control'>
//             <label htmlFor='email'>Email : </label>
//             <input type='email' name='email' id='email' />
//           </div>

//           <button className='btn' type='submit'>
//             add person
//           </button>
//         </form>
//       </article>
//     </>
//   );
// };

// export default ControlledInputs;

// *****************************************************

// import React, { useState } from 'react';

// const ControlledInputs = () => {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log('Radi! ');
//     console.log(firstName, email);
//   };
//   return (
//     <>
//       <article>
//         <form className='form' onSubmit={handleSubmit}>
//           <div className='form-control'>
//             <label htmlFor='firstName'>Name : </label>
//             <input
//               type='text'
//               name='firstName'
//               id='firstName'
//               value={firstName}
//               onChange={e => setFirstName(e.target.value)}
//             />
//           </div>

//           <div className='form-control'>
//             <label htmlFor='email'>Email : </label>
//             <input
//               type='email'
//               name='email'
//               id='email'
//               value={email}
//               onChange={a => setEmail(a.target.value)}
//             />
//           </div>

//           <button className='btn' type='submit'>
//             add person
//           </button>
//         </form>
//       </article>
//     </>
//   );
// };

// export default ControlledInputs;

//

// import React, { useState } from 'react';

// const ControlledInputs = () => {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(firstName, email);
//   };

//   return (
//     <>
//       <article>
//         <form className='form' onSubmit={handleSubmit}>
//           <div className='form-control'>
//             <label htmlFor='firstName'>Name :</label>
//             <input
//               type='text'
//               name='firstName'
//               id='firstName'
//               value={firstName}
//               onChange={e => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className='form-control'>
//             <label htmlFor='email'>Email :</label>
//             <input
//               type='email'
//               name='email'
//               id='email'
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <button className='btn' type='submit'>
//             Add person
//           </button>
//         </form>
//       </article>
//     </>
//   );
// };

// export default ControlledInputs;

// 1. vezba

import React, { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button className='btn' type='submit'>
          Add person
        </button>
      </form>
    </>
  );
};

export default ControlledInputs;
