import React from "react";
import ProductsProps from "../Props/ProductsProps";
import products from "../../Assets/Products.json";
import NavBar from "../NavBar/NavBar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Footer from "../Footer/Footer";

export default function ProductPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => product.type === type);

  const navigateToHistory = () => {
    navigate(-1);
  };

  return (
    <>
      <NavBar />
      <Breadcrumb
        aria-label="Default breadcrumb example"
        className="bg-gray-100 px-5 py-3"
      >
        <Breadcrumb.Item icon={HiHome}>
          <button onClick={navigateToHistory}>Home</button>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-11 justify-center items-center p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className=" flex justify-center items-center">
            {/* Assuming ProductsProps displays individual products */}
            <ProductsProps
              id={product.id}
              src={product.img[0]} // You might want to change this based on your product structure
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
