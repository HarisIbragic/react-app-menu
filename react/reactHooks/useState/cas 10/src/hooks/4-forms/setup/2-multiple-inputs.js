// import React, { useState } from 'react';

// const MultipleReturns = () => {
//   const [person, setPerson] = useState({
//     firstName: '',
//     email: '',
//     age: '',
//   });
//   const [people, setPeople] = useState([]);

//   const handleChange = e => {
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name, value);
//     setPerson({ ...person, [name]: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (person.firstName && person.email && person.age) {
//       const newPerson = { ...person, id: new Date().getTime().toString() };
//       console.log(newPerson);
//       setPeople([...people, newPerson]);
//       setPerson({ firstName: '', email: '', age: '' });
//     }
//   };

//   return (
//     <>
//       <article className='form'>
//         <form>
//           <div className='form-control'>
//             <label htmlFor='firstName'>Name : </label>
//             <input
//               type='text'
//               name='firstName'
//               id='firstName'
//               value={person.firstName}
//               onChange={handleChange}
//             />
//           </div>

//           <div className='form-control'>
//             <label htmlFor='email'>Email : </label>
//             <input
//               type='email'
//               name='email'
//               id='email'
//               value={person.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className='form-control'>
//             <label htmlFor='age'>Age : </label>
//             <input
//               type='number'
//               name='age'
//               id='age'
//               value={person.age}
//               onChange={handleChange}
//             />
//           </div>
//           <button type='submit' className='btn' onClick={handleSubmit}>
//             add person
//           </button>
//         </form>
//       </article>
//       <article>
//         {people.map(person => {
//           const { id, firstName, email, age } = person;

//           return (
//             <div className='item' key={id}>
//               <h4>{firstName}</h4>
//               <p>{email}</p>
//               <p>{age} $</p>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };

// export default MultipleReturns;

import React, { useState } from 'react';

const MultipleReturns = () => {
  const [person, setPerson] = useState({ name: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: '', email: '', age: '' });
    }
  };

  return (
    <>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='name'>Email: </label>
            <input
              type='text'
              name='name'
              id='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              name='email'
              id='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='number'
              name='age'
              id='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className='btn' type='submit' onClick={handleSubmit}>
            Add person
          </button>
        </form>
      </article>
      <article>
        {people.map(user => {
          const { id, name, email, age } = user;

          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleReturns;
