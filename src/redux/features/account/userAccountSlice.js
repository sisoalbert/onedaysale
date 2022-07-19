import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "name",
  surname: "surname",
  email: "Email",
  cellphone_number: "Cellphone number",
  date: "Date",
  time: "Time",
};

const userAccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addUserAccount(state, action) {
      //console log date and time
      // console.log(action.payload);
      //replace initialState with action.payload
      state = action.payload;
      return state;
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
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
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
  addUserAccount,
  deleteUserAccount,
  deleteFromTrades,
  addToCart,
  increment,
  decrement,
  removeItem,
  clear,
} = userAccountSlice.actions;
const userAccountReducer = userAccountSlice.reducer;

export default userAccountReducer;
