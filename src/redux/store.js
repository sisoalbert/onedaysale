import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

//import cartReducer
import cartReducer from './features/cart/cartSlice';
import userAccountReducer from './features/account/userAccountSlice';
import userOrdersReducer from './features/account/userOrdersSlice';

const reducers = combineReducers({
  cart: cartReducer,
  account: userAccountReducer,
  order: userOrdersReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'order', 'account'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
