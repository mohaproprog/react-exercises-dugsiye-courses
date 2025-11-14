import React, { useContext } from 'react';
import ProductContext from './ProductContext';

function CartSummery() {
  const { items, setItems } = useContext(ProductContext);

  function remove(cartId){
      const updatedItems = items.filter((item) => item.cartId !== cartId);
      setItems(updatedItems);
  }

  return (
      <div>
          <h2>Cart Summary</h2>
          {items.length < 1 ? (
              <strong>No Items in the cart</strong>
          ) : (
              <ul>
                  {items.map((item) => (
                      <li key={item.cartId}>
                          {item.name} - ${item.price} 
                          <button onClick={() => remove(item.cartId)}>Remove</button>
                      </li>
                  ))}
              </ul>
          )}
      </div>
  )
}

export default CartSummery;
