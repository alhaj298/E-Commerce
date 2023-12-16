import HomePageSlider from "../HomePageSlider/HomePageSlider";
import ProductTypesPage from "../ProductTypesPage/ProductTypesPage";
import RandomProducts from "../RecomendedProducts/RecomendedProducts";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <motion.div
        // initial={{ x: "100%" }}
        // animate={{ x: 0 }}
        // exit={{ y: "-100%" }}
        // transition={{ type: "spring", duration: 0.5 }}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <HomePageSlider />
        <ProductTypesPage />
        <RandomProducts />
      </motion.div>
    </div>
  );
}
