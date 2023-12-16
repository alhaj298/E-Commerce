import React from "react";
import { Link } from "react-router-dom";
import "./ProductsTypesPage.css";
export default function ProductTypesPage() {
  return (
    <div className="flex justify-center items-center gap-5 md:flex-row flex-col h-auto w-full p-7">
      {/* Use lowercase type in the Link components */}
      <div
        className="h-28 w-[100%] rounded-3xl text-5xl text-white  flex items-center justify-center hover:scale-110 duration-200 transition-transform"
        id="phones"
      >
        <Link to="/products/phone">Phones</Link>
      </div>
      <div
        className="h-28  w-[100%] rounded-3xl text-5xl text-white flex items-center justify-center bg-cover hover:scale-110 duration-200 transition-transform"
        id="tablets"
      >
        <Link to="/products/tablet">Tablets</Link>
      </div>
      <div
        className="h-28  w-[100%] rounded-3xl text-5xl text-white flex items-center justify-center bg-cover hover:scale-110 duration-200 transition-transform "
        id="laptops"
      >
        <Link to="/products/laptop">Laptops</Link>
      </div>
      <div
        className=" h-28  w-[100%] rounded-3xl text-5xl text-white flex items-center justify-center bg-cover hover:scale-110 duration-200 transition-transform"
        id="accessories"
      >
        <Link to="/products/accessories">Accessories</Link>
      </div>
    </div>
  );
}
