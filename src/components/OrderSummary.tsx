import React from 'react';

interface OrderSummaryProps {
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  totalCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems, totalCost }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="mb-2 flex justify-between">
            <p>{item.name} (x{item.quantity})</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <p>Sub-total:</p>
          <p>${totalCost.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Delivery:</p>
          <p>Free</p>
        </div>
        {/* <div className="flex justify-between mb-2">
          <p>Discount:</p>
          <p>25%</p>
        </div> */}
        <div className="flex justify-between mb-2">
          <p>Tax:10%</p>
          <p>${(totalCost * 0.1).toFixed(2)}</p> {/* Assuming 10% tax */}
        </div>
        <div className="flex justify-between mb-4">
          <p className="font-bold">Total:</p>
          <p className="font-bold">${(totalCost * 1.1).toFixed(2)}</p> {/* Total with tax applied */}
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
