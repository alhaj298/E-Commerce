// ProductsProps.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductsProps(props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-gray-50 shadow shadow-slate-300 rounded-sm h-auto w-[85%] xl:w-[70%] flex flex-col justify-center items-center gap-3 p-3">
      <img
        src={props.src}
        width={240}
        alt={props.name}
        className=" hover:scale-110 duration transition-transform"
      />
      <h1 className="text-xl text-center">{props.name}</h1>
      <h3>{props.price}</h3>
      <button
        className="snipcart-add-item bg-blue-500 text-white rounded-full text-sm font-semibold h-8 w-36"
        data-item-image={props.src}
        data-item-id={props.id}
        data-item-name={props.name}
        data-item-price={props.price}
        data-item-url={`/products/${props.id}`}
      >
        Add to cart
      </button>
      <Link
        to={`/${props.id}`}
        className="h-8 w-36 bg-transparent rounded-full border text-md font-semibold border-black text-center flex justify-center items-center"
        onClick={scrollToTop}
      >
        View More
      </Link>
    </div>
  );
}
