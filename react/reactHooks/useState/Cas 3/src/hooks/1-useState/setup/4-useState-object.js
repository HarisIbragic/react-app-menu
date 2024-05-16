// import React, { useState } from 'react';

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'Haris',
//     age: '20y',
//     message: 'Sellam Deni, ja sam Hari a ti ? :)',
//   });

//   const changeMessage = () => {
//     setPerson({
//       ...person,
//       name: 'Deni',
//       age: '21y',
//       message: 'Alejkumu sellam, ja se isto zovem Deni! :D',
//     });
//   };

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <h1>{person.message}</h1>
//       <button className='btn' onClick={changeMessage}>
//         Change meessage
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

// ****************************************************************
// // HARI:
// import React from 'react';
// import { useState } from 'react';

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'Haris',
//     age: '22y',
//     address: 'Emina Redzepagica br. 26',
//     message: 'Pozdrav deni, gde zivis ti?',
//   });
//   const changeMassage = () => {
//     setPerson({
//       ...person,
//       name: 'Deni',
//       age: '22y',
//       address: 'Sutjeska br. 10',
//       message: 'Pozdrav hari ja zivim preko puta stadiona.',
//     });
//   };
//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h3>{person.age}</h3>
//       <h3>{person.address}</h3>
//       <h2>{person.message}</h2>
//       <button className='btn' onClick={changeMassage}>
//         change massage
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

// ****************************************************************

// import React, { useState } from 'react';

// const UseStateObject = () => {
//   const [name, setName] = useState('Hari');
//   const [age, setAge] = useState('25y');
//   const [message, setMessage] = useState('Pozdrav Deni!');

//   const changeMessage = () => {
//     setName('Deni');
//     setAge('20y');
//     setMessage('Pozdrav Hari');
//   };

//   return (
//     <>
//       <h3>{name}</h3>
//       <h3>{age}</h3>
//       <h3>{message}</h3>
//       <button className='btn' onClick={changeMessage}>
//         Chgange Message
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

import React from 'react';
import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Haris',
    lastName: 'Ibragic',
    age: '22y',
    address: 'Emina Redzepagica br. 26',
    message: 'Hello everybody, my name is Haris and I am  programer',
  });
  const changePerson = () => {
    setPerson({
      ...person,
      name: 'Denijal',
      lastName: 'Kacapor',
      age: '22y',
      address: 'Sutjeska br. 10',
      message: 'Hello everybody, my name is Denijal and I am  programer',
    });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.lastName}</h2>
      <h2>{person.age}</h2>
      <h2>{person.address}</h2>
      <h5>{person.message}</h5>
      <button className='btn' onClick={changePerson}>
        Change person
      </button>
    </>
  );
};

export default UseStateObject;
