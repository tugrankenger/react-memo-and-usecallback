import { useState } from 'react';
import './App.css';

const phones = [
  { name: 'xioami', price: 1000 },
  { name: 'apple', price: 3000 },
  { name: 'samsung', price: 2999 },
];

function App() {
  const [products] = useState(phones);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className='wrapper'>
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

const Products = ({ products, addToCart }) => {
  return (
    <>
      <h1>Products</h1>
      <div className='products'>
        {products.map((item) => {
          return (
            <Product
              key={item.name}
              name={item.name}
              price={item.price}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
};

const Product = ({ name, price, addToCart }) => {
  return (
    <>
      <div className='product'>
        <h2>{name}</h2>
        <h3>{price.toLocaleString()} ₺</h3>
        {addToCart && (
          <button onClick={() => addToCart({name, price})}>Add to basket</button>
        )}
      </div>
    </>
  );
};

const Cart = ({ cart, emptyCart }) => {
  return (
    <>
      <h1>
        Basket : <button onClick={emptyCart}>Remove basket</button>
      </h1>
      <div className='products'>
        {cart.map((item, i) => {
          return <Product key={i} name={item.name} price={item.price} />;
        })}
      </div>
    </>
  );
};

export default App;
