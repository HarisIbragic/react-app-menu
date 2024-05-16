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
// import React, { useState, useReducer } from 'react';
// import Modal from './Modal';

// const reducer = (state, aciton) => {
//   console.log(state);
//   if (aciton.type === 'ADD_ITEM') {
//     const newPeople = [...state.people, aciton.payload];

//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'Item added',
//     };
//   }

//   if (aciton.type === 'NO_VALUE') {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: 'please enter value!',
//     };
//   }

//   throw new Error('NE POSTOJI TA ACKIJA!');
// };

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
//       const newItem = { id: new Date().getTime().toString(), name };

//       dispatch({ type: 'ADD_ITEM', payload: newItem });
//       setName('');
//     } else {
//       dispatch({ type: 'NO_VALUE' });
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

// ***************************************************************

// import React from 'react';
// import { useReducer } from 'react';
// import { useState } from 'react';
// import Modal from './Modal';
// import { reducer } from './reducer';

// const reducer = (state, action) => {
//   if (action.type === 'ADD_PERSON') {
//     const newPeople = [...state.people, action.payload];

//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'Item added',
//     };
//   }
//   if (action.type === 'NO_VALUE') {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: 'Enter value',
//     };
//   }
//   throw new Error('no action type');
// };

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
//     console.log('radi');

//     if (name) {
//       const newPerson = { id: new Date().getTime().toString(), name };
//       dispatch({ type: 'ADD_PERSON', payload: newPerson });
//       setName('');
//     } else {
//       dispatch({ type: 'NO_VALUE' });
//     }
//   };
//   const closeModal = () => {
//     dispatch({ type: 'CLOSE_MODAL' });
//   };

//   return (
//     <>
//       {state.isModalOpen && (
//         <Modal modalContent={state.modalContent} closeModal={closeModal} />
//       )}
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
//       </form>
//       {state.people.map(user => {
//         return (
//           <div key={user.id}>
//             <h4>{user.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

// import React, { useReducer, useState } from 'react';
// import Modal from './Modal';
// import { reducer } from './reducer';
// import { defaultState } from './setup/defaultState';

// const Index = () => {
//   const [name, setName] = useState('');
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('radi');

//     if (name) {
//       const newPerson = { id: new Date().getTime().toString(), name };

//       dispatch({ type: 'ADD_VALUE', payload: newPerson });
//       setName('');
//     } else {
//       dispatch({ type: 'NO_VALUE' });
//     }
//   };
//   const closeModal = () => {
//     dispatch({ type: 'CLOSE_MODAL' });
//   };
//   return (
//     <>
//       {state.isModalOpen && (
//         <Modal modalContent={state.modalContent} closeModal={closeModal} />
//       )}
//       <form className='form' onSubmit={handleSubmit}>
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
//       </form>
//       {state.people.map(user => {
//         return (
//           <div className='item' key={user.id}>
//             <h4>{user.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { TiUserAdd } from 'react-icons/ti';
import { HiUserRemove } from 'react-icons/hi';

const reducer = (state, action) => {
  if (action.type === 'VALUE_ADDED') {
    const newPeople = [...state.people, action.payload];

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'User is added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Empty',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
      modalContent: '',
    };
  }
  if (action.type === 'REMOVE_PERSON') {
    const removeUser = state.people.filter(user => user.id !== action.payload);

    return {
      ...state,
      people: removeUser,
      isModalOpen: true,
      modalContent: 'User removed',
    };
  }
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
    console.log('radi');

    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };

      dispatch({ type: 'VALUE_ADDED', payload: newPerson });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button className='btn' type='submit'>
          Add <TiUserAdd />
        </button>
      </form>

      {state.people.map(user => {
        return (
          <div className='item' key={user.id}>
            <h4>{user.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_PERSON', payload: user.id });
              }}
            >
              remove
              <HiUserRemove  />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
