// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import FullProduct from "./Pages/FullProduct";
import ProductPage from "./Components/ProductPage/ProductPage"; // Adjust the path accordingly
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Use :type as the dynamic parameter */}
          <Route path="/products/:type" element={<ProductPage />} />
          <Route path="/:id" element={<FullProduct />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add a route for the Cart component */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
