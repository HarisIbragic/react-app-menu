import React, { useState } from 'react';
import { data } from '../../../data';
import { useContext } from 'react';

const PersonContext = React.createContext();
// PRVA KOMPONENTA
const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = id => {
    setPeople(people => {
      return people.filter(person => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>Context API /useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};
// PRVA KOMPONENTA END

// DRUGA KOMPONENTA
const List = () => {
  const { people } = useContext(PersonContext);
  console.log(people);

  return (
    <>
      {people.map(user => {
        return <SinglePerson key={user.id} {...user} />;
      })}
    </>
  );
};
// DRUGA KOMPONENTA END

// TRECA KOMPONENTA
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
// TRECA KOMPONENTA

export default ContextAPI;
