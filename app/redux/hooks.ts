import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { createSelector } from "@reduxjs/toolkit";
import { cartAdapter, cartReset } from "./features/cart/cartSlice";
import { booksAdapter, booksReset } from "./features/books/bookSlice";
import { filtersReset } from "./features/fiters/filterSlice";
import { formReset } from "./features/form/formSlice";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectActiveFilter = (state: RootState) => state.filters.selectedFilter;
export const selectStartIndex = (state: RootState) => state.filters.startIndex;

export const selectBooksState = (state: RootState) => state.books;
export const selectAllBooks = createSelector(
  selectBooksState,
  booksAdapter.getSelectors().selectAll
);
export const selectBookById = (bookId: string) =>
  createSelector(
    selectBooksState,
    (state) => booksAdapter.getSelectors().selectById(state, bookId)
  );

// userSlice selectors

export const selectUser = (state: RootState) => state.user.user;
export const selectUserEmail = (state: RootState) => state.user.user?.email;
export const selectUserName = (state: RootState) => state.user.user?.name;
export const selectUserBio = (state: RootState) => state.user.user?.bio;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;

// formSlice selectors

export const selectEmail = (state: RootState) => state.form.email;
export const selectName = (state: RootState) => state.form.name;
export const selectPassword = (state: RootState) => state.form.password;
export const selectIsEmailValid = (state: RootState) => state.form.isEmailValid;
export const selectIsPasswordValid = (state: RootState) => state.form.isPasswordValid;
export const selectIsNameValid = (state: RootState) => state.form.isNameValid;
export const selectEmailError = (state: RootState) => state.form.errors.email;
export const selectPasswordError = (state: RootState) => state.form.errors.password;
export const selectNameError = (state: RootState) => state.form.errors.name;
export const selectServerError = (state: RootState) => state.form.errors.server;

// cartSlice selectors

const selectCartState = (state: RootState) => state.cart;
export const selectAllCartItems = createSelector(selectCartState, (cartState) =>
  cartAdapter.getSelectors().selectAll(cartState)
);
export const selectCartIds = createSelector(selectCartState, (cartState) =>
  cartAdapter.getSelectors().selectIds(cartState)
);
export const selectCartItem = (selectCartState: RootState["cart"], id: string) => cartAdapter.getSelectors().selectById(selectCartState, id);

export const selectTotal = createSelector(selectAllCartItems, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);

export const useResetAll = () => {
  const dispatch = useDispatch();

  const resetBooks = () => {
    dispatch(booksReset());
  };

  const resetFilters = () => {
    dispatch(filtersReset());
  };

  const resetCart = () => {
    dispatch(cartReset());
  };

  const resetForm = () => {
    dispatch(formReset());
  };

  return { resetBooks, resetFilters, resetCart, resetForm };
};