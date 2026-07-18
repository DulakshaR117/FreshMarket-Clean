import { FiStar, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";

function ProductDetailsInfo({ product }) {
  const { addToCart } = useCart();
  if (!product) {
    return (
      <div>
        <h2 className="text-3xl font-bold">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div>
      <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
        {product.category}
      </span>

      <h1 className="text-5xl font-bold mt-6">
        {product.name}
      </h1>

      <div className="flex items-center gap-3 mt-5">
        <div className="flex text-yellow-400">
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </div>

        <span className="text-gray-500">
          ({product.rating} • {product.reviews} Reviews)
        </span>
      </div>

      <h2 className="text-4xl font-bold text-green-600 mt-8">
        Rs. {product.price}.00
      </h2>

      <p className="mt-8 text-gray-600 leading-8">
        {product.description}
      </p>

      <div className="mt-8">
        <span
          className={`font-semibold ${
            product.stock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.stock ? "✓ In Stock" : "✕ Out of Stock"}
        </span>
      </div>

      <div className="flex gap-4 mt-10">
        <button className="px-5 py-3 border rounded-xl hover:bg-gray-100 transition">
          −
        </button>

        <div className="px-8 py-3 border rounded-xl">
          1
        </div>

        <button className="px-5 py-3 border rounded-xl hover:bg-gray-100 transition">
          +
        </button>
      </div>

     <button
  onClick={() => addToCart(product)}
  disabled={!product.stock}
  className="mt-10 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-10 py-4 rounded-xl flex items-center gap-3 transition"
>
  <FiShoppingCart />
  Add To Cart
</button>
    </div>
  );
}

export default ProductDetailsInfo;