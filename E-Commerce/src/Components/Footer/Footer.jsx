import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex flex-col gap-2 items-center space-x-3 rtl:space-x-reverse"
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
      </div>
      <div className="flex p-4">
        <ul className="flex gap-3">
          <li>
            <Link to="/products/phone">Phones</Link>
          </li>
          <li>
            <Link to="/products/tablet">Tablets</Link>
          </li>
          <li>
            <Link to="/products/laptop">Laptops</Link>
          </li>
          <li>
            <Link to="/products/accessories">Accessories</Link>
          </li>
        </ul>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-gray-400 text-sm">
          &copy; 2023 FlowPhone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
