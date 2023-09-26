import React from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Cart />
      <Products />
      <Footer />
    </ChakraProvider>
  );
}
