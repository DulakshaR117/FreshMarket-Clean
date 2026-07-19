import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const wished = isInWishlist(product.id);

  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border block"
    >
      {/* Wishlist Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className={`absolute top-4 right-4 z-10 p-3 rounded-full shadow transition ${
          wished
            ? "bg-red-500 text-white"
            : "bg-white text-gray-500 hover:text-red-500"
        }`}
      >
        <FiHeart
          className={wished ? "fill-current" : ""}
          size={20}
        />
      </button>

      {/* Product Image */}
      <div className="h-56 flex items-center justify-center bg-gradient-to-br from-green-50 to-white text-8xl group-hover:scale-110 transition duration-500">
        {product.image}
      </div>

      {/* Product Details */}
      <div className="p-6">
        <p className="text-green-600 text-sm font-semibold">
          {product.category}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {product.name}
        </h3>

        <div className="flex justify-between items-center mt-6">
          <span className="text-3xl font-bold text-green-600">
            Rs. {product.price}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 transition"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;