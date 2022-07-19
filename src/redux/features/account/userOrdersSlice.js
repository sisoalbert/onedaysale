import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrderNumber: "X0QAIORZ",
  orderHistory: [
    {
      id: 1,
      orderNumber: "123456789",
      // date: "2020-01-01",
      // time: "12:00",
      // total: "123",
    },
    {
      id: 2,
      orderNumber: "123456789",
    },
  ],
};

const userOrdersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderNumber(state, action) {
      //console log date and time
      //   console.log(state);
      //   console.log(action.payload);
      //replace initialState with action.payload
      state.currentOrderNumber = action.payload;
    },
    addOrderHistory(state, action) {
      state.orderHistory.push(action.payload);
    },

    deleteUserAccount(state, action) {
      state = {};
      return state;
    },

    deleteFromTrades(state, action) {
      //delete by id
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },

    addToCart(state, { payload }) {
      //   console.log(payload);
      //uid is the unique id of the item
      const { id } = payload;

      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      //   console.log(state);
      //   console.log(state);
      //   console.log(action);
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    clear(state) {
      return [];
    },
  },
});

export const {
  addOrderNumber,
  addOrderHistory,
  deleteUserAccount,
  deleteFromTrades,
  removeItem,
  clear,
} = userOrdersSlice.actions;
const userOrdersReducer = userOrdersSlice.reducer;

export default userOrdersReducer;
