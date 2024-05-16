// import React, { useState, useEffect } from 'react';
// import List from './List';
// import Alert from './Alert';
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem('list')));
//   } else {
//     return [];
//   }
// };
// function App() {
//   const [name, setName] = useState('');
//   const [list, setList] = useState(getLocalStorage());
//   const [isEditing, setIsEditing] = useState(false);
//   const [editID, setEditID] = useState(null);
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!name) {
//       showAlert(true, 'danger', 'please enter value');
//     } else if (name && isEditing) {
//       setList(
//         list.map(item => {
//           if (item.id === editID) {
//             return { ...item, title: name };
//           }
//           return item;
//         })
//       );
//       setName('');
//       setEditID(null);
//       setIsEditing(false);
//       showAlert(true, 'success', 'value changed');
//     } else {
//       showAlert(true, 'success', 'item added to the list');
//       const newItem = { id: new Date().getTime().toString(), title: name };

//       setList([...list, newItem]);
//       setName('');
//     }
//   };

//   const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg });
//   };
//   const clearList = () => {
//     showAlert(true, 'danger', 'empty list');
//     setList([]);
//   };
//   const removeItem = id => {
//     showAlert(true, 'danger', 'item removed');
//     setList(list.filter(item => item.id !== id));
//   };
//   const editItem = id => {
//     const specificItem = list.find(item => item.id === id);
//     setIsEditing(true);
//     setEditID(id);
//     setName(specificItem.title);
//   };
//   useEffect(() => {
//     localStorage.setItem('list', JSON.stringify(list));
//   }, [list]);
//   return (
//     <section className='section-center'>
//       <form className='grocery-form' onSubmit={handleSubmit}>
//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

//         <h3>Add items</h3>
//         <div className='form-control'>
//           <input
//             type='text'
//             className='grocery'
//             placeholder='add'
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//           <button type='submit' className='submit-btn'>
//             {isEditing ? 'edit' : 'submit'}
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className='grocery-container'>
//           <List items={list} removeItem={removeItem} editItem={editItem} />
//           <button className='clear-btn' onClick={clearList}>
//             clear items
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

// export default App;

// vezba

import React, { useEffect, useState } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: 'false', type: '', msg: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map(item => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'item is changed');
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
      showAlert(true, 'success', 'item added to list');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = id => {
    setList(list.filter(item => item.id !== id));
    showAlert(true, 'danger', 'item removed');
  };

  const editItem = id => {
    const changeItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(changeItem.title);
  };

  const clearList = () => {
    setList([]);
    showAlert(true, 'danger', 'items removed');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Add Items</h3>
        <div className='form-control'>
          <input
            type='text'
            value={name}
            className='grocery'
            placeholder='add'
            onChange={e => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />

          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}
export default App;