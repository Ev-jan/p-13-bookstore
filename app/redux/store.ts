"use client";
/// <reference types="redux-persist" />
import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import booksSliceReducer from "./features/books/bookSlice";
import filterSliceReducer from "./features/fiters/filterSlice";
import cartSliceReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/user";
import formReducer from "./features/form/formSlice";
import { booksApi } from "./api";

const rootReducer = combineReducers({
    books: booksSliceReducer,
    filters: filterSliceReducer,
    cart: cartSliceReducer,
    user: userReducer,
    form: formReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  });

const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }).concat(booksApi.middleware)
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store