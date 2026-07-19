import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiHeart,
  FiLogOut,
  FiPackage,
} from "react-icons/fi";

import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const { user, logout, isAuthenticated } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-green-600"
        : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-green-600"
        >
          🌱 FreshMarket
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/categories" className={navLinkClass}>
            Categories
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Search */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
          <FiSearch className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search fresh products..."
            className="bg-transparent outline-none flex-1"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative hover:text-red-500 transition"
          >
            <FiHeart size={24} />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-green-600 transition"
          >
            <FiShoppingCart size={24} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          {isAuthenticated ? (
            <div className="relative hidden md:block">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <span className="font-medium">
                  {user?.name}
                </span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-xl border overflow-hidden">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <FiUser />
                    Profile
                  </Link>

                  <Link
                    to="/orders"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <FiPackage />
                    Orders
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-red-600 w-full text-left"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 font-medium hover:text-green-600"
            >
              <FiUser />
              Login
            </Link>
          )}

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden hover:text-green-600"
          >
            {menuOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-4 p-5">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/categories"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/wishlist"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Wishlist
            </NavLink>

            <NavLink
              to="/cart"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink
                  to="/profile"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>

                <NavLink
                  to="/orders"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Orders
                </NavLink>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-left font-medium text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;