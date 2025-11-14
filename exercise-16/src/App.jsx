import { useState } from 'react';
import products from './Items';
import CartSummery from './CartSummery';
import ProductContext from './ProductContext';

function App() {
  const [newProduct, setNewProduct] = useState([]);

 function AddProduct(id) {
  const found = products.find((p) => p.id === id);
  if (found) {
    const cartItem = {
      ...found,
      cartId: crypto.randomUUID()
    };
    setNewProduct((prev) => [...prev, cartItem]);
  }
}


  return (
    <ProductContext.Provider value={{ items: newProduct, setItems: setNewProduct }}>
      <div>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <p>Price: ${product.price}</p>
            <button onClick={() => AddProduct(product.id)}>Add to Cart</button>
          </li>
        ))}
        <CartSummery />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
