import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="text-6xl bg-green-50 rounded-2xl w-24 h-24 flex items-center justify-center">
          {item.image}
        </div>

        <div>
          <p className="text-green-600 text-sm">
            {item.category}
          </p>

          <h3 className="text-2xl font-bold">
            {item.name}
          </h3>

          <p className="text-green-600 font-bold mt-2">
            Rs. {item.price}.00
          </p>

          <p className="text-gray-500 mt-1">
            Total: <span className="font-semibold">Rs. {item.price * item.quantity}.00</span>
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <div className="flex items-center border rounded-xl">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="p-3 hover:bg-gray-100 rounded-l-xl transition"
          >
            <FiMinus />
          </button>

          <span className="px-5 font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="p-3 hover:bg-gray-100 rounded-r-xl transition"
          >
            <FiPlus />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-600 transition"
        >
          <FiTrash2 size={22} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;