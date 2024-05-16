// import React, { useEffect } from 'react';
// import SingleProduct from './setup/SingleProduct';

// const BigList = React.memo(({ products, addToCart }) => {
//   useEffect(() => {
//     console.log('Big List');
//   });

//   return (
//     <>
//       <section className='products'>
//         {products.map(product => {
//           return (
//             <SingleProduct
//               key={product.id}
//               {...product}
//               addToCart={addToCart}
//             />
//           );
//         })}
//       </section>
//     </>
//   );
// });

// export default BigList;

import React from 'react';
import SingleProduct from './setup/SingleProduct';

const BigList = React.memo(({ products, addToCart }) => {
  return (
    <>
      <section className='products'>
        {products.map(product => {
          return (
            <SingleProduct
              key={product.id}
              {...product}
              addToCart={addToCart}
            />
          );
        })}
      </section>
    </>
  );
});

export default BigList;
