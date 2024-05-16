// import React, { useState } from 'react';
// import { data } from '../../../data';
// import { useContext } from 'react';

// const PersonContext = React.createContext();

// const ContextAPI = () => {
//   const [people, setPeople] = useState(data);

//   const removePerson = id => {
//     setPeople(people => {
//       return people.filter(person => person.id !== id);
//     });
//   };

//   return (
//     <PersonContext.Provider value={{ people, removePerson }}>
//       <h3>Context API /useContext</h3>
//       <List />
//     </PersonContext.Provider>
//   );
// };

// const List = () => {
//   const { people } = useContext(PersonContext);
//   console.log(people);

//   return (
//     <>
//       {people.map(user => {
//         return <SinglePerson key={user.id} {...user} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//   const { removePerson } = useContext(PersonContext);

//   return (
//     <div className='item'>
//       <h4>{name}</h4>
//       <button onClick={() => removePerson(id)}>remove</button>
//     </div>
//   );
// };

// export default ContextAPI;

import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';
import { useContext } from 'react';

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = id => {
    setPeople(people => {
      return people.filter(person => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h2>Context API</h2>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  console.log(people);

  return (
    <>
      {people.map(person => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ name, id }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <>
      <div className='item'>
        <h3>{name}</h3>
        <button onClick={() => removePerson(id)}>Remove</button>
      </div>
    </>
  );
};

export default ContextAPI;
