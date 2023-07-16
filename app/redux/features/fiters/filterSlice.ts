"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedFilter: "Architecture",
  startIndex: 0,
}

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    selectedFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilter = action.payload;
    },
    incrementedStartIndex: (state) => {
        state.startIndex = state.startIndex + 1;
    },
    resetStartIndex: (state) => {
      state.startIndex = 0;
    },
    filtersReset: () => {
      return initialState;
    },
  },
});

export const { selectedFilter, incrementedStartIndex,  resetStartIndex, filtersReset } = filtersSlice.actions;

export default filtersSlice.reducer;
