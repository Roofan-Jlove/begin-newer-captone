// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Food {
//   _id: string;
//   name: string;
//   description: string;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   category: string;
//   price: number;
//   originalPrice?: number;
//   tags: string[];
//   available: boolean;
// }

// interface CartState {
//   items: Food[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Food>) => {
//       state.items.push(action.payload);
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;
