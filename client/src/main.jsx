import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { OrderProvider } from "./contexts/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <WishlistProvider>
            <CartProvider>
              <App />

              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  duration: 3000,
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                }}
              />
            </CartProvider>
          </WishlistProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);