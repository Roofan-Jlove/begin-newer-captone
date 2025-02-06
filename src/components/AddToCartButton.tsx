import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../app/Cart/CartSlice';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;  // Ensure image prop is included
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,  // Pass image URL to action
    }));
    alert('Added to cart successfully!');
  };

  return <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>;
};

export default AddToCartButton;
