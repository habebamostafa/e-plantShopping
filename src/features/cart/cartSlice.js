import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0
  },
  reducers: {
    // REQUIRED: addItem()
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    },
    
    // REQUIRED: removeItem()
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    },
    
    // REQUIRED: updateQuantity()
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
      }
      
      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    },
    
    // Optional additional reducers
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    },
    
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    }
  }
});

export const { 
  addItem,          // REQUIRED
  removeItem,       // REQUIRED
  updateQuantity,   // REQUIRED
  incrementQuantity, 
  decrementQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;