// import React, { useState } from 'react';
// import { data } from '../../../data';

// const PropDrilling = () => {
//   const [people, setPeople] = useState(data);
//   console.log(people);

//   const removePerson = id => {
//     setPeople(people => {
//       return people.filter(person => person.id !== id);
//     });
//   };

//   const removeAll = () => {
//     setPeople([]);
//   };

//   return (
//     <section>
//       <h3>Prop drilling</h3>
//       <List people={people} removePerson={removePerson} removeAll={removeAll} />
//       {people.length > 0 && (
//         <button className='btn' onClick={() => removeAll()}>
//           remove All
//         </button>
//       )}
//     </section>
//   );
// };

// const List = ({ people, removePerson, removeAll }) => {
//   return (
//     <>
//       {people.map(person => {
//         return (
//           <SinglePerson
//             key={person.id}
//             {...person}
//             removePerson={removePerson}
//             removeAll={removeAll}
//           />
//         );
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name, removePerson }) => {
//   return (
//     <div>
//       <div className='item'>
//         <h4>{name}</h4>
//         <button onClick={() => removePerson(id)}>remove</button>
//       </div>
//     </div>
//   );
// };

// export default PropDrilling;

import React, { useState } from 'react';
import { data } from '../../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  const removePerson = id => {
    setPeople(people => {
      return people.filter(person => person.id !== id);
    });
  };

  const removeAll = () => {
    setPeople([]);
  };
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
      {people.length >= 2 && (
        <button className='btn' onClick={removeAll}>
          Remove all
        </button>
      )}
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map(person => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <>
      <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
      </div>
    </>
  );
};

export default PropDrilling;
