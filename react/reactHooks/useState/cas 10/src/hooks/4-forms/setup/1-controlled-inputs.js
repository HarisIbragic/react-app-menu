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

// **********************************************************

import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (firstName && email) {
      // OVO JE OBJEKAT KOJI PRAVIMO ZA PERSONA I ON IMA ID, FIRSTNAM i EMAIL:
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);

      setPeople(people => {
        return [...people, person];
      });
      // KAD STISNEMO ENTER DA SE IZBRISE: ''
      setFirstName('');
      setEmail('');
    } else {
      console.log('Prazno.');
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name :</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
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
        {people.map(user => {
          const { id, firstName, email } = user;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
