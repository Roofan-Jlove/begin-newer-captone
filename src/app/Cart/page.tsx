"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { incrementQuantity, decrementQuantity, removeItem } from './CartSlice';
import CartItem from './CartItem';
import Header2 from '../../components/Header2';
import Link from 'next/link';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCost = useSelector((state: RootState) => state.cart.totalCost);
  const dispatch = useDispatch();

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <main>
      <Header2 />
      <div
        className="bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Contact</span>
        </p>
      </div>
      <div className="w-3/5 mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}  // Pass image prop here
              />
            ))}
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-xl font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
              <Link href='/checkOut'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
