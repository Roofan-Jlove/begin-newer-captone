// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/utils/store';
// import { addToCart } from '@/redux/cartSlice';

// const IndexPage = () => {
//   const items = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     const sampleItem = {
//       _id: '1',
//       name: 'Sample Item',
//       description: 'This is a sample item.',
//       image: { asset: { _ref: 'sample-image' } },
//       category: 'Sample Category',
//       price: 9.99,
//       tags: ['sample', 'item'],
//       available: true,
//     };
//     dispatch(addToCart(sampleItem));
//   };

//   return (
//     <div>
//       <h1>Index Page</h1>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//       <div>
//         <h2>Cart Items:</h2>
//         {items.length === 0 ? <p>No items in cart.</p> : (
//           <ul>
//             {items.map((item) => (
//               <li key={item._id}>{item.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IndexPage;
