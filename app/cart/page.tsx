"use client"
import Counter from "../components/counter/counter";
import Button from "../components/button/button";
import Card from "../components/bookCard/card";
import { TotalPrice, Main, CartHeading, TableHeaderWrapper, TableItemWrapper, ItemPrice, ItemDelivery } from "./style";
import { useAppSelector, useAppDispatch, selectAllCartItems, selectTotal, useResetAll } from "../redux/hooks";
import { itemUpdated } from "../redux/features/cart/cartSlice";
import { ICartItem } from "../interfaces";
import { logout } from "../redux/features/user/user";
import { useRouter } from 'next/navigation'

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectAllCartItems);
  const total = useAppSelector(selectTotal);
  const router = useRouter();
  const { resetBooks, resetFilters, resetCart, resetForm } = useResetAll();

  const handleButtonClick = () => {
    dispatch(logout());
    resetBooks();
    resetFilters();
    resetCart();
    resetForm();
    router.push("/");
  }

  const incrementQty = (cartItem: ICartItem) => {
    const updatedCartItem: ICartItem = {
      ...cartItem,
      quantity: cartItem.quantity + 1,
      price: cartItem.price + cartItem.price / cartItem.quantity,
    };
    dispatch(itemUpdated(updatedCartItem));
  };

  const decrementQty = (cartItem: ICartItem) => {
    if (cartItem.quantity < 2) return;
    const updatedCartItem: ICartItem = {
      ...cartItem,
      quantity: cartItem.quantity - 1,
      price: cartItem.price - cartItem.price / cartItem.quantity,
    };
    dispatch(itemUpdated(updatedCartItem));
  };

  return (
    <Main>
      <CartHeading>SHOPPING CART</CartHeading>
      <section role="table">
        <TableHeaderWrapper role="row">
          <div role="columnheader">ITEM</div>
          <div role="columnheader">QUANTITY</div>
          <div role="columnheader">PRICE</div>
          <div role="columnheader">DELIVERY</div>
        </TableHeaderWrapper>
        {cartItems.length !== 0 && cartItems.map((item) =>
        (<TableItemWrapper key={item.id} role="row">
          <Card variant="cart" book={item.product} />
          <div role="cell"><Counter startCount={item.quantity} decrement={() => decrementQty(item)} increment={() => incrementQty(item)} /></div>
          <ItemPrice role="cell">{item.product.currencyCode} {item.price}</ItemPrice>
          <ItemDelivery role="cell">Shipping: delivery</ItemDelivery>
        </TableItemWrapper>)
        )}
      </section>
      <TotalPrice>TOTAL PRICE: ${total}</TotalPrice>
      <Button onClick={handleButtonClick}>{"check out"}</Button>
    </Main>
  )
}