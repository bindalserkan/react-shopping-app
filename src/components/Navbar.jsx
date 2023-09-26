import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  function onCartToggle() {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  }

  function onScroll() {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "fixed top-0 left-0 right-0 h-[9vh] opacity-100 z-50 rounded-b-3xl bg-violet-200"
            : "fixed top-0 left-0 right-0 h-[9vh] opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center h-full ">
          <div className="w-1/5 text-center text-lg text-slate-900 font-bold">Your Shopping Website</div>
          <div className="w-3/5 flex justify-center">
            <div className="inline-block mx-2">About Us</div>
            <div className="inline-block mx-2">Contact</div>
          </div>
          <div className="w-1/5 flex items-center justify-end">
            <button
              onClick={onCartToggle}
              className="flex items-center right-3 border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagIcon className="icon-style text-slate-900 transition-all duration-300" />
              <div className="rounded right-1 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 bg-rose-600 text-slate-100 shadow-slate-900">
                {totalQTY}
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
