// import React from 'react';
// import { useState } from 'react';

// const MultipleReturn = () => {
//   const [loading, setLoading] = useState(false);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return <h2>Nasi podaci</h2>;
// };

// export default MultipleReturn;

//********************************************

// import React, { useEffect } from 'react';
// import { useState } from 'react';

// const url = 'https://api.github.com/users/QuincyLarson2';

// const MultipleReturn = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [user, setUser] = useState('default user');

//   useEffect(() => {
//     // 2 NACIN ZA HVATANJE PODATAKA:
//     fetch(url)
//       .then(resp => {
//         console.log(resp);

//         // AKO JE DOBRO:
//         if (resp.status >= 200 && resp.status <= 299) {
//           return resp.json();
//         }

//         // AKO NIJE DOBRO:
//         else {
//           setIsLoading(false);
//           setIsError(true);
//           throw new Error(resp.statusText);
//         }
//       })
//       .then(user => {
//         const { login } = user;
//         setUser(login);
//         setIsLoading(false);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   if (isLoading) {
//     return (
//       <div>
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div>
//         <h1>Error...</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>{user}</h1>
//     </div>
//   );
// };

// export default MultipleReturn;

import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then(response => {
        console.log(response);

        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error('hari');
        }
      })
      .then(user => {
        const { node_id } = user;
        setUser(node_id);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error!!!</h2>;
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturn;
