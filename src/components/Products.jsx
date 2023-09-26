import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function Products() {
  const [items, setItems] = useState([]);
  const fakeStoreApiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(fakeStoreApiUrl)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

  return (
    <>
      <div className="products-container mt-20 flex flex-col">
        <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-slate-900 text-center">
          Products
        </h1>
        <div className="mb-20 grid justify-center gap-8 lg:gap-5 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {items.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
