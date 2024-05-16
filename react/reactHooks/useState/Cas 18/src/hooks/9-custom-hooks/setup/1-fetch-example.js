// import React from 'react';

// import { useFetch } from './2-useFetch';

// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/javascript-store-products';

// const Example = () => {
//   const { loading, products } = useFetch(url);

//   // console.log(products);

//   return (
//     <div>
//       <h2>{loading ? 'loading...' : 'data'}</h2>
//     </div>
//   );
// };

// export default Example;

import React from 'react';
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { loading, products } = useFetch(url);

  return (
    <div>
      <h1>{loading ? 'loading...' : 'data'}</h1>;
    </div>
  );
};

export default Example;
