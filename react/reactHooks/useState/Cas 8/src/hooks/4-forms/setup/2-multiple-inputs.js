import React, { useState } from 'react';

const MultipleReturns = () => {
  const [product, setProduct] = useState({
    article: '',
    quantity: '',
    price: '',
  });
  const [secondProduct, setSecondProduct] = useState([]);
  const [total, setTotal] = '';

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setProduct({ ...product, [name]: value });
  };
  const handleClick = e => {
    e.preventDefault();

    if (product.article && product.quantity && product.price) {
      const newProduct = { ...product, id: new Date().getTime().toString() };

      setSecondProduct([...secondProduct, newProduct]);
      setProduct({ article: '', quantity: '', price: '' });

      const allTotal = () => {
        setTotal = product.quantity * product.price;
      };
      allTotal();
    } else {
      console.log('clear');
    }
  };

  return (
    <>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='product'>Article :</label>
            <input
              type='text'
              name='article'
              id='article'
              value={product.article}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='quantity'>Quantity :</label>
            <input
              type='number'
              name='quantity'
              id='quantity'
              value={product.quantity}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='number'>Price :</label>
            <input
              type='number'
              name='price'
              id='price'
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleClick}>
            Add article
          </button>
        </form>
      </article>
      <article>
        {secondProduct.map(device => {
          const { id, article, quantity, price } = device;

          return (
            <div key={id} className='item'>
              <h4>{article}</h4>
              <p>{quantity}</p>
              <p>{price} $</p>
            </div>
          );
        })}
      </article>
      <article>
        <div className='item'>
          <h4>Total</h4>
          <p>{total}$</p>
        </div>
      </article>
    </>
  );
};

export default MultipleReturns;
