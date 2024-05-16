// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { useFetch } from './2-useFetch';

// const url = 'https://course-api.com/javascript-store-products';

// //
// const calculateMostExpensive = data => {
//   // console.log('hello');
//   return (
//     data.reduce((total, item) => {
//       const price = item.fields.price;
//       // console.log(price);

//       //  7999  >= 2599
//       if (price >= total) {
//         //total(7999)  = 7999
//         total = price;
//       }
//       //      7999
//       return total;
//     }, 0) / 100
//   );
// };

// const Index = () => {
//   const { products } = useFetch(url);
//   const [count, setCount] = useState(0);
//   const [cart, setCart] = useState(0);

//   const addToCart = useCallback(() => {
//     console.log(cart);
//     setCart(cart + 1);
//   }, [cart]);

//   const mostExpensive = useMemo(() => calculateMostExpensive(products));

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button className='btn' onClick={() => setCount(count + 1)}>
//         click me
//       </button>
//       <h1 style={{ margin: '3rem' }}>cart: {cart}</h1>
//       <h1>Most Expensive: ${mostExpensive}</h1>
//       <BigList products={products} addToCart={addToCart} />
//     </>
//   );
// };

// const BigList = React.memo(({ products, addToCart }) => {
//   useEffect(() => {
//     console.log('BigList Called!');
//   });

//   return (
//     <section className='products'>
//       {products.map(product => {
//         return (
//           <SingleProduct key={product.id} {...product} addToCart={addToCart} />
//         );
//       })}
//     </section>
//   );
// });

// const SingleProduct = ({ fields, addToCart }) => {
//   useEffect(() => {
//     console.log('SingleProduct Called!');
//   });

//   let { name, price } = fields;
//   price = price / 100;

//   const image = fields.image[0].url;

//   return (
//     <article className='product'>
//       <img src={image} alt={name} />
//       <h4>{name}</h4>
//       <p>${price}</p>
//       <button onClick={addToCart}>add to cart</button>
//     </article>
//   );
// };

// export default Index;

// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { useFetch } from './2-useFetch';
// import BigList from '../BigList';

// const url = 'https://www.course-api.com/javascript-store-products';

// const calculateMostExpensive = data => {
//   return (
//     data.reduce((total, item) => {
//       const price = item.fields.price;

//       if (price >= total) {
//         total = price;
//       }
//       return total;
//     }, 0) / 100
//   );
// };

// const Index = () => {
//   const { products } = useFetch(url);

//   const [cart, setCart] = useState(0);

//   const addToCart = useCallback(() => {
//     console.log(cart);
//     setCart(cart + 1);
//   }, [cart]);

//   const mostExpensive = useMemo(() => calculateMostExpensive(products));

//   return (
//     <>
//       <h3 style={{ margin: '3rem' }}>Cart: {cart}</h3>
//       <h3 style={{ margin: '3rem' }}>Most Expensive: {mostExpensive}$</h3>
//       <BigList products={products} addToCart={addToCart} />
//     </>
//   );
// };

// export default Index;

import React, { useCallback, useMemo, useState } from 'react';
import BigList from '../BigList';
import { useFetch } from './2-useFetch';

const url = 'https://www.course-api.com/javascript-store-products';

const calculateMostExpensive = data => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const index = () => {
  const { products } = useFetch(url);
  const [cart, setCart] = useState(0);

  const mostExpensive = useMemo(() => calculateMostExpensive(products));

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h3 style={{ margin: '3rem' }}>Cart: {cart}</h3>
      <h3 style={{ margin: '3rem' }}>Most Expensive: {mostExpensive}$</h3>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

export default index;
