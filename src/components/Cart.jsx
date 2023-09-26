import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCart,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice.js";

import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  function onCartToggle() {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  }

  function onClearCart() {
    dispatch(setClearCart());
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState ? " visible translate-x-0" : " invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState ? "visible translate-x-0" : " invisible translate-x-8"
          }`}
        >
          <div className="bg-white h-12 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
            <button
              type="button"
              className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 text-slate-900 py-2 gap-3 text-sm px-5 font-semibold"
              onClick={onCartToggle}
            >
              Back to Store
            </button>
            <h1 className="text-center font-medium text-slate-900">
              You have {totalQTY} items in your cart
            </h1>
            {cartItems?.length > 0 && (
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 text-slate-900 py-2 gap-3 text-sm px-5 font-semibold"
                >
                  Clear Your Cart
                </button>
              </div>
            )}
          </div>
          {cartItems?.length > 0 && (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 flex items-center justify-between">
                <div className="flex flex-col items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    Total Amount
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>

                <button
                  type="button"
                  className="button-theme bg-theme-cart text-white"
                >
                  Check Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
