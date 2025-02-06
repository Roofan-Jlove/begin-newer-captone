import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "./CartSlice";
import Image from "next/image"; // Import next/image

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // Ensure image prop is included
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={80} // Define the width
          height={80} // Define the height
          className="w-20 h-20 object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p>${price.toFixed(2)}</p>
          <div className="flex items-center ">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
            >
              +
            </button>

            <button
              onClick={handleRemove}
              className="bg-red-500 text-white px-2 py-1 rounded mt-2 ml-10"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
