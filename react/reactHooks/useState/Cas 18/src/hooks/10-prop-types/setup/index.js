import React from 'react';
import Product from './Product';
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch';
import defaultImage from '../../../assets/default-image.jpeg';

// free API:
const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
  const { products } = useFetch(url);
  console.log(products);

  return (
    <div>
      <h2>products</h2>
      <img src={defaultImage} alt='' />
      <section className='products'>
        {products.map(product => {
          const { id } = product;
          return <Product key={id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
