import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/shopvibe/" element={<Home />} />
          <Route path="/shopvibe/products" element={<ProductList />} />
          <Route path="/shopvibe/product/:id" element={<ProductDetail />} />
          <Route path="/shopvibe/cart" element={<Cart />} />
          <Route path="/shopvibe/*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
