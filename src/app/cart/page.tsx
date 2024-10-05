'use client';

import React from 'react';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Layout>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p>Your cart is empty.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item flex justify-between mb-4 p-4 border-b">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button
                className="mt-2 text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
            </div>
            <div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary mt-8">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div>
    </Layout>
  );
};

export default CartPage;
