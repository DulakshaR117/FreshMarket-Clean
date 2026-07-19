import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FiHeart
            size={70}
            className="mx-auto text-red-400 mb-6"
          />

          <h1 className="text-4xl font-bold">
            Your wishlist is empty
          </h1>

          <p className="text-gray-500 mt-3">
            Save your favorite products here.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          My Wishlist
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow p-6"
            >
              <div className="text-7xl text-center">
                {item.image}
              </div>

              <p className="text-green-600 mt-5">
                {item.category}
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {item.name}
              </h2>

              <p className="text-green-600 font-bold text-2xl mt-4">
                Rs. {item.price}
              </p>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex justify-center items-center gap-2"
                >
                  <FiShoppingCart />
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-5"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Wishlist;