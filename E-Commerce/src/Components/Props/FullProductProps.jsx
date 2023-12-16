import { FaHdd, FaMemory, FaMobileAlt } from "react-icons/fa";
import products from "../../Assets/Products.json";

export default function FullProductProps(props) {
  if (Array.isArray(products.storage)) {
    products.storage.toLocalString();
  }

  return (
    <div className="h-full w-full gap-3 flex flex-col justify-center py-5 px-5 bg-slate-100">
      <h1 className="text-2xl lg:text-3xl font-semibold">{props.name}</h1>
      <div className="bg-black h-[2px] w-20"></div>
      <h2 className="text-2xl font-medium">
        <span className="font-bold">$</span> {props.price}
      </h2>
      <div className="flex flex-col gap-2 ">
        {/* <h2 className="text-2xl font-semibold text-gray-700">SPECIFICATIONS</h2> */}
        <div className="flex flex-col gap-2">
          {props.screen_size && (
            <div className="flex items-center space-x-2">
              <FaMobileAlt />
              <span className="text-lg font-medium">Display Size:</span>{" "}
              {props.screen_size}
            </div>
          )}
          {props.storage && (
            <div className="flex items-center space-x-2">
              <FaHdd />
              <span className="text-lg font-medium">Storage:</span>{" "}
              {props.storage}
            </div>
          )}
          {props.ram && (
            <div className="flex items-center space-x-2">
              <FaMemory />
              <span className="text-lg font-medium">RAM:</span> {props.ram}
            </div>
          )}
        </div>
        <p className="text-base font-normal mt-4">
          <span className="text-2xl font-semibold text-gray-700">
            Description:
          </span>{" "}
          {props.description}
        </p>
      </div>

      <button
        className="snipcart-add-item bg-blue-500 text-white py-2 px-4 rounded mt-4"
        data-item-id={props.id}
        data-item-name={props.name}
        data-item-price={props.price}
        data-item-url={`/products/${props.id}`}
        data-item-image={props.img}
        data-item-storage={props.storage}
      >
        Add to cart
      </button>
    </div>
  );
}
