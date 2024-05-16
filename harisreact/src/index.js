import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { data } from './data';
import Car from './Car';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Carlist = () => {
  return (
    <section className='carlist'>
      {data.map(car => {
        const { id } = car;
        return <Car key={id} {...car} />;
      })}
    </section>
  );
};

export default Carlist;

root.render(<Carlist />);
