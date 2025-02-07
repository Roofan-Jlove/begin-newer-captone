"use client";

import ShippingAddressForm from "../../components/ShippingAddressForm";
import OrderSummary from "../../components/OrderSummary";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Link from "next/link";
import Header2 from "../../components/Header2";

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCost = useSelector((state: RootState) => state.cart.totalCost);

  return (
    <main>
      <Header2 />
      <div
        className="bg-cover bg-center h-48 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Check Out</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Check Out</span>
        </p>
      </div>
    
    <div className="w-4/5 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <ShippingAddressForm />
        </div>
        <div className="w-1/3">
          <OrderSummary cartItems={cartItems} totalCost={totalCost} />
        </div>
      </div>
    </div>
    </main>
  );
};

export default CheckoutPage;
