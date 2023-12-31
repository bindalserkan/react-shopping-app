import React from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ChakraProvider>
        <Navbar />
        <Cart />
        <Products />
        <Footer />
      </ChakraProvider>
    </ErrorBoundary>
  );
}
