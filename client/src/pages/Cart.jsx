import { useCart } from "../contexts/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems } = useCart();

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-8">
              Looks like you haven't added any products yet.
            </p>

            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <CartSummary />
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;