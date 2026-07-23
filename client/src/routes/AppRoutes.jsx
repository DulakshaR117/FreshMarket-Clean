import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Protected Route
import ProtectedRoute from "../components/auth/ProtectedRoute";

// Customer Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";

import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import OrderSuccess from "../pages/OrderSuccess";
import Profile from "../pages/Profile";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminCategories from "../pages/admin/AdminCategories";
import AdminInventory from "../pages/admin/AdminInventory";
import AdminOrders from "../pages/admin/AdminOrders";
import AdminCustomers from "../pages/admin/AdminCustomers";
import AdminAnalytics from "../pages/admin/AdminAnalytics";

function AppRoutes() {
  return (
    <Routes>
      {/* ==========================
          Customer Routes
      ========================== */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* ==========================
          Authentication
      ========================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ==========================
          Admin Routes
      ========================== */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<AdminDashboard />}
        />

        <Route
          path="products"
          element={<AdminProducts />}
        />

        <Route
          path="categories"
          element={<AdminCategories />}
        />

        <Route
          path="inventory"
          element={<AdminInventory />}
        />

        <Route
          path="orders"
          element={<AdminOrders />}
        />

        <Route
          path="customers"
          element={<AdminCustomers />}
        />

        <Route
          path="analytics"
          element={<AdminAnalytics />}
        />
      </Route>

      {/* ==========================
          404
      ========================== */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;