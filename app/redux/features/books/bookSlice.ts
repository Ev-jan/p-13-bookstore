"use client";

import { IBook } from "@/app/interfaces";
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export const booksAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.id,
});

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState({}),
  reducers: {
    booksReceived: (state, action: PayloadAction<IBook[]>) => {
      booksAdapter.setAll(state, action.payload);
    },
    booksAdded: booksAdapter.upsertMany,
    booksReset: () => {
      return booksAdapter.getInitialState({});
    },
  },
});

export const { booksAdded, booksReceived, booksReset } = booksSlice.actions;

export default booksSlice.reducer;
