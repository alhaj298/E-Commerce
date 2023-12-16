# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# FlowPhone

FlowPhone is a modern e-commerce application built with React. It provides a seamless online shopping experience, integrating essential features such as product navigation, animated transitions, and a streamlined checkout process.

## Table of Contents

- [Dependencies](#dependencies)
- [Integration with Snipcart](#integration-with-snipcart)
- [AI for UI Design](#ai-for-ui-design)
- [Authentication](#authentication)
- [Additional Tips](#additional-tips)

## Dependencies

FlowPhone relies on several key dependencies to ensure smooth functionality:

- **`react-router-dom`:** Handles navigation within the application.
- **Local Fetch for Product Data:** Fetches product data locally to display in the application.
- **`framer-motion`:** Enhances the user experience with smooth animations.
- **`react-snipcart`:** Integrates Snipcart for a simplified shopping cart and checkout process.
- **`Formik`:** Manages forms, providing a robust solution for form handling in the contact page.

## Integration with Snipcart

To integrate Snipcart for a simplified shopping cart and checkout process, follow these steps:

1. Refer to Snipcart's documentation for script integration.

1. Install Snipcart using `npm install snipcart` or `npm install react-snipcart

1. Import the `Snipcart` component into your application.

```jsx
import { Snipcart } from "react-snipcart";
```

3. Add the `Snipcart` component to your application.

```jsx
<Snipcart />
```

4. Add the `Snipcart` component to your application.

```jsx
<Snipcart />
```

5. <head>
     <!-- ... other head elements ... -->
     <script
       async
       src="https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.js"
     ></script>
     <link
       rel="stylesheet"
       href="https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.css"
     />
   </head>
   <body>
     <!-- ... other body elements ... -->
     <div id="snipcart" data-api-key="YOUR_API_KEY"></div>
   </body>

6. import React from "react";
   import { SnipcartContext } from "react-snipcart";

const Cart = () => {
const { cart } = React.useContext(SnipcartContext);

return (

<div>
<h2>Your Cart</h2>
<ul>
{cart.items.map((item) => (
<li key={item.id}>
{item.name} - {item.quantity} x {item.price}
</li>
))}
</ul>
</div>
);
};

export default Cart;

7.  import React from "react";
    import { SnipcartContext } from "react-snipcart";

const Checkout = () => {
const { cart } = React.useContext(SnipcartContext);

return (

<div>
<h2>Checkout</h2>
<p>Total: {cart.total}</p>
<button
className="snipcart-checkout"
style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px" }} >
Proceed to Checkout
</button>
</div>
);
};

export default Checkout;

8.  import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import Home from "./Home";
    import Cart from "./Cart";
    import Checkout from "./Checkout";
    import { SnipcartProvider } from "react-snipcart";

const App = () => {
return (
<SnipcartProvider>
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
</Routes>
</Router>
</SnipcartProvider>
);
};

export default App;

## Authentication

FlowPhone implements user authentication using Auth0. Manage the authentication state using the AuthProvider.

## Contributing

If you'd like to contribute to FlowPhone, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
