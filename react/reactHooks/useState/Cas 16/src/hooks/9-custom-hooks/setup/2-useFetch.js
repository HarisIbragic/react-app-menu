import { useState, useEffect } from 'react';

//OVDE JE MNOGO BITNO DA CUSTOM HOOKS MORA POCINJATI SA 'use' npr: 'useAsmir, useFetch, useBiloSta...'

export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    // prodact- ako je dobro tu nalaze podaci:
    const products = await response.json();
    console.log(response, products);
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  // console.log(products);

  return { loading, products };
};
