import { Link } from "react-router-dom";
import { useOrders } from "../contexts/OrderContext";

function Orders() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-6">
            My Orders
          </h1>

          <div className="bg-white rounded-3xl shadow-lg p-12">

            <h2 className="text-2xl font-semibold mb-3">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mb-8">
              You haven't placed any orders yet.
            </p>

            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Start Shopping
            </Link>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          My Orders
        </h1>

        <div className="space-y-8">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                <div>
                  <h2 className="text-2xl font-bold">
                    {order.id}
                  </h2>

                  <p className="text-gray-500">
                    {order.createdAt}
                  </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold w-fit">
                  {order.status}
                </span>

              </div>

              <div className="space-y-3">

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b pb-3"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <span>
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-6 border-t pt-6 space-y-2">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {order.subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>Rs. {order.deliveryFee}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- Rs. {order.discount}</span>
                </div>

                <div className="flex justify-between text-2xl font-bold pt-3 border-t">
                  <span>Total</span>
                  <span>Rs. {order.total}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Orders;