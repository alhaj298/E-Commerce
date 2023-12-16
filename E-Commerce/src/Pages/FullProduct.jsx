import NavBar from "../Components/NavBar/NavBar";
import FullProductPage from "../Components/FullProductPage/FullProductPage";
import Footer from "../Components/Footer/Footer";
import RandomProducts from "../Components/RecomendedProducts/RecomendedProducts";
export default function FullProduct() {
  return (
    <>
      <NavBar />
      <FullProductPage />
      <div className=" mt-24">
        <RandomProducts />
      </div>
      <Footer />
    </>
  );
}
