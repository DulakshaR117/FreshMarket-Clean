import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-green-600"
        : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300">
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

          {/* Remove this until we build the Contact page if you want */}
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

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <FiShoppingCart size={24} />

           {cartCount > 0 && (
  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    {cartCount}
  </span>
)}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 font-medium hover:text-green-600"
          >
            <FiUser />
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden transition hover:text-green-600"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-5 gap-4">

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
              to="/login"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;