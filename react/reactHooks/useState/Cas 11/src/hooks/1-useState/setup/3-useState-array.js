// import React from 'react';
// import { data } from '../../../data';
// // import { useState } from 'react';

// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);

//   const removePerson = id => {
//     console.log(id);
//     const newPersons = people.filter(person => person.id !== id);

//     setPeople(newPersons);
//   };

//   return (
//     <>
//       {people.map(user => {
//         const { id, name } = user;

//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//             <button onClick={() => removePerson(id)}>remove</button>
//           </div>
//         );
//       })}
//       <button onClick={() => setPeople([])} className='btn'>
//         Clear All
//       </button>
//     </>
//   );
// };

// export default UseStateArray;

/*
export const data = [];

*/

import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = id => {
    const newPeople = people.filter(user => user.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        remove all
      </button>
    </>
  );
};

export default UseStateArray;
