import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import LoginButton from "../Auth0/LoginButton";
import LogoutButton from "../Auth0/LogoutButton";
import Profile from "../Auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-blue-500 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/significon-social/512/Significon-Android-512.png"
            className="h-8"
            alt="FlowPhone Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            FlowPhone
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-white"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <FaBars size={20} />
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
          style={{ zIndex: isMenuOpen ? "20" : "0" }}
        >
          <div className="flex flex-col justify-center items-center gap-1 font-medium text-md p-4 md:p-0 mt-4 rounded-md md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border ">
            <Link
              className="block py-2 px-3 text-white rounded md:text-white md:p-0 md:hover:bg-transparent hover:bg-white hover:text-blue-700"
              aria-current="page"
              to="/"
            >
              Home
            </Link>

            <Link
              to="/contact"
              className="block py-2 px-3 text-blue-700 rounded hover:bg-white md:hover:text-blue-500 md:p-0 "
            >
              Contact
            </Link>

            <a
              className="snipcart-checkout snipcart-summary flex justify-center items-center gap-2"
              href="#"
              style={{ textDecoration: "none" }}
            >
              <MdShoppingCartCheckout className="text-white" />
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price text-white">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </span>
            </a>

            <div className="flex justify-center  items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Profile />
                  <LogoutButton />
                </>
              ) : (
                <LoginButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
