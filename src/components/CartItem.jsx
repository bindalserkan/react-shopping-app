import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../app/CartSlice.js";

const CartItem = ({ item: { id, title, image, price, cartQuantity } }) => {
  const dispatch = useDispatch();

  function onRemoveItem() {
    dispatch(setRemoveItemFromCart({ id, title, image, price, cartQuantity }));
  }

  function onIncreaseItemQTY() {
    dispatch(setIncreaseItemQTY({ id, title, image, price, cartQuantity }));
  }
  function onDecreaseItemQTY() {
    dispatch(setDecreaseItemQTY({ id, title, image, price, cartQuantity }));
  }

  return (
    <>
      <div className="flex items-center w-full px-5">
        <div className="flex items-center w-full gap-10 bg-white">
          <img src={image} alt={`img/${id}`} className="w-36 h-30 lg:w-28" />

          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-5 w-full">
              <button
                type="button"
                onClick={onDecreaseItemQTY}
                className="bg-rose-600 text-white w-7 h-7 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                -
              </button>
              <div className="bg-rose-600 text-white font-medium lg:text-xs w-10 h-10 lg:h-8 lg:w-8 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                onClick={onIncreaseItemQTY}
                className="bg-rose-600 text-white w-7 h-7 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="grid items-center justify-center">
              <h1 className="text-lg lg:text-base text-slate-900 font-medium">
                ${price * cartQuantity}
              </h1>
            </div>
            <div className="grid items-center justify-center">
              <button
                type="button"
                className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
                onClick={onRemoveItem}
              >
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
