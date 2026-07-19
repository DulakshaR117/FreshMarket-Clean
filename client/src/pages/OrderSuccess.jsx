import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

function OrderSuccess() {
  const orderId = localStorage.getItem("latest-order-id");

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-xl w-full text-center">

        <FiCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-4">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with FreshMarket.
        </p>

        <div className="bg-green-50 rounded-xl p-5 mb-8">
          <p className="text-gray-600">Order ID</p>

          <h2 className="text-2xl font-bold text-green-700">
            {orderId}
          </h2>

          <p className="mt-3 text-gray-500">
            Estimated Delivery: 2 - 4 Business Days
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">

          <Link
            to="/products"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-xl font-semibold transition"
          >
            View Orders
          </Link>

        </div>

      </div>
    </section>
  );
}

export default OrderSuccess;