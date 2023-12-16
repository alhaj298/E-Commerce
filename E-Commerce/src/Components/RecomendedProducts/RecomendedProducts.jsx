import React from "react";
import { Link } from "react-router-dom";
import Products from "../../Assets/Products.json";

const getRandomProducts = (count) => {
  const productsLength = Products.length;
  const selectedIndices = new Set();

  while (selectedIndices.size < count) {
    const randomIndex = Math.floor(Math.random() * productsLength);
    selectedIndices.add(randomIndex);
  }

  return Array.from(selectedIndices).map((index) => Products[index]);
};

const RandomProducts = () => {
  const randomProducts = getRandomProducts(4);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl md:text-2xl">Featured products</h1>
      <div className="h-auto w-[85%] p-2 flex justify-center m-auto gap-4 mb-10 sm:flex-row flex-col md:w-full">
        {randomProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 shadow shadow-slate-300 flex flex-col justify-center items-center gap-3 p-3 w-full rounded-xl"
          >
            {product.img && product.img[0] && (
              <img
                src={product.img[0]}
                alt=""
                className="bg-cover hover:scale-110 duration-200 transition-transform"
              />
            )}
            <h3 className="text-md font-bold text-center">{product.name}</h3>
            <p>${product.price}</p>

            <button
              className="snipcart-add-item h-8 w-36 bg-blue-500 text-white rounded-full text-sm font-semibold"
              data-item-image={product.img[0]}
              data-item-id={product.id}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-url={`/products/${product.id}`}
            >
              Add to cart
            </button>
            <Link
              to={`/${product.id}`}
              className="h-8 w-36 bg-transparent flex justify-center items-center border border-black rounded-full text-black font-semibold"
              onClick={scrollToTop}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
