import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalCost: number;
}

const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return { items: [], totalCost: 0 };
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return { items: [], totalCost: 0 };
  }
};

const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalCost += action.payload.price * action.payload.quantity;
      saveState(state);  // Save state to local storage
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.totalCost -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      saveState(state);  // Save state to local storage
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalCost += item.price;
      }
      saveState(state);  // Save state to local storage
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalCost -= item.price;
      }
      saveState(state);  // Save state to local storage
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
