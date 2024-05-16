// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const url = 'https://api.github.com/users';

// const UseEffectFetch = () => {
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch(url);
//     // [1,2,3,4,5,6...30]
//     const data = await response.json();
//     console.log(response, data);

//     setUsers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <>
//       <h3>GitHub users</h3>
//       <ul className='users'>
//         {users.map(user => {
//           const { id, login, avatar_url, html_url, type, site_admin } = user;

//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <div>
//                 <h4>{login}</h4>
//                 <a href={html_url} target='_blank'>
//                   profile
//                 </a>
//                 <p>{type}</p>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default UseEffectFetch;

// prva vezba

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>GitHub users</h3>
      <ul className='users'>
        {users.map(user => {
          const { id, avatar_url, html_url, login, type } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target='_blank'>
                  profile
                </a>
                <p>{type}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetch;
