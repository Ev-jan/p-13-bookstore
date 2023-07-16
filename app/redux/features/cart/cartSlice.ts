"use client";

import { ICartItem } from "@/app/interfaces";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const cartAdapter = createEntityAdapter<ICartItem>({
  selectId: (item) => item.id,
});

const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    itemAdded: cartAdapter.addOne,
    itemRemoved: cartAdapter.removeOne,
    itemUpdated: cartAdapter.upsertOne,
    cartReset: () => {
      return cartAdapter.getInitialState({});
    },
  },
});

export const { itemAdded, itemRemoved, itemUpdated, cartReset } = cartSlice.actions;

export default cartSlice.reducer;
