// import React from 'react';
// import Modal from './Modal';
// import { data } from '../../data';
// import { useState } from 'react';

// const Index = () => {
//   const [name, setName] = useState('');
//   const [people, setPeople] = useState(data);
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (name) {
//       setShowModal(true);
//       setPeople([...people, { id: new Date().getTime().toString(), name }]);
//       setName('');
//     } else {
//       setShowModal(true);
//     }
//   };

//   return (
//     <>
//       {showModal && <Modal />}
//       <form onSubmit={handleSubmit} className='form'>
//         <div>
//           <input
//             type='text'
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn'>
//           Add
//         </button>

//         {people.map(person => {
//           return (
//             <div key={person.id}>
//               <h4>{person.name}</h4>
//             </div>
//           );
//         })}
//       </form>
//     </>
//   );
// };

// export default Index;

// ***********************************************************************

// import React, { useState, useReducer } from 'react';
// import Modal from './Modal';

// ODE IDU AKCIJE:
// const reducer = (state, aciton) => {};

//
// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: '',
// };

// const Index = () => {
//   const [name, setName] = useState('');
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (name) {

//     } else {

//     }
//   };

//   return (
//     <>
//       {state.isModalOpen && <Modal modalContent={state.modalContent} />}
//       <form onSubmit={handleSubmit} className='form'>
//         <div>
//           <input
//             type='text'
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn'>
//           Add
//         </button>

//         {state.people.map(person => {
//           return (
//             <div key={person.id}>
//               <h4>{person.name}</h4>
//             </div>
//           );
//         })}
//       </form>
//     </>
//   );
// };

// export default Index;

// **************************************************
import React, { useState, useReducer } from 'react';
import Modal from './Modal';

const reducer = (state, aciton) => {
  console.log(state);
  if (aciton.type === 'ADD_ITEM') {
    const newPeople = [...state.people, aciton.payload];

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added',
    };
  }

  if (aciton.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value!',
    };
  }

  throw new Error('NE POSTOJI TA ACKIJA!');
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = e => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };

      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Add
        </button>

        {state.people.map(person => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default Index;
