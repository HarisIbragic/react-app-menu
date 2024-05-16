const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload),
    };
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
          };
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.amount !== 0);

    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      // acc       perItem
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        //  10 * 3 =20
        cartTotal.total += itemTotal; // cartTotal.total =  cartTotal.total  + itemTotal
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    // 99.99 - float(100 cifara moze da ima) , double - (x2 = 200 cirafa moze da ima posle )
    total = parseFloat(total.toFixed(2)); // total.toFixed(2) - zaokruzuje ga na 2 decimale.

    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  throw new Error(`no matching '${action.type}'  action type`);
};

export default reducer;

// 354564,99
