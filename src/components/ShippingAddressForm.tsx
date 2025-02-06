import Link from 'next/link';
import React from 'react';

const ShippingAddressForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First name" className="border p-2 rounded" />
          <input type="text" placeholder="Last name" className="border p-2 rounded" />
          <input type="email" placeholder="Email address" className="border p-2 rounded" />
          <input type="tel" placeholder="Phone number" className="border p-2 rounded" />
          <input type="text" placeholder="City" className="border p-2 rounded col-span-2" />
          <input type="text" placeholder="Zip code" className="border p-2 rounded col-span-2" />
          <input type="text" placeholder="Address 1" className="border p-2 rounded col-span-2" />
          <input type="text" placeholder="Address 2" className="border p-2 rounded col-span-2" />
        </div>
        <div className="flex justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Same as billing address
          </label>
        </div>
        <div className="flex justify-between">
            <Link href='/Cart'>
          <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded">
            Back to cart
          </button>
          </Link>
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
            Proceed to shipping
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
