import React from 'react';
import Image from 'next/image';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, image, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Image src={image} alt={name} className="w-16 h-16 object-cover mr-4" />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600">${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={onDecrement} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={onIncrement} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">+</button>
      </div>
      <button onClick={onRemove} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
    </div>
  );
};

export default CartItem;
