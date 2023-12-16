import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import FullProductProps from "../Props/FullProductProps";
import products from "../../Assets/Products.json";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";
import { motion } from "framer-motion";

export default function FullProductPage() {
  // Get the id parameter from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product with the matching id
  const fullProduct = products.find((product) => product.id === parseInt(id));

  // Check if the product exists
  if (!fullProduct) {
    return <div>Product not found</div>;
  }

  // Render the product details using FullProductProps
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 10 }}
      exit={{ opacity: 0 }}
    >
      <>
        <Breadcrumb
          aria-label="Default breadcrumb example"
          className="bg-gray-100 px-4 py-2"
        >
          <Breadcrumb.Item icon={HiHome}>
            {/* <button onClick={() => navigate(-1)}>Home</button> */}
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-xs">Products</Breadcrumb.Item>
          <Breadcrumb.Item>
            <p className="text-red-600 text-xs"> {fullProduct.name}</p>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="flex justify-center items-center sm:flex-row flex-col w-[100%] h-full m-auto border bg-slate-100"
          key={products.id}
        >
          {/* Swipper Js */}
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="w-[100%] h-auto "
          >
            {fullProduct.img.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgUrl}
                  alt={`Product Image ${index}`}
                  className="bg-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <FullProductProps
            id={fullProduct.id}
            name={fullProduct.name}
            screen_size={fullProduct.screen_size}
            description={fullProduct.description}
            storage={fullProduct.storage}
            ram={fullProduct.ram}
            price={fullProduct.price}
            img={fullProduct.img[0]}
          />
        </div>
      </>
    </motion.div>
  );
}
