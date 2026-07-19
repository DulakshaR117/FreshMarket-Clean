import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useOrders } from "../contexts/OrderContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const { addOrder } = useOrders();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    address: "",
    delivery: "standard",
    payment: "cod",
  });

  const deliveryFee =
    form.delivery === "express" ? 700 : 300;

  const discount =
    totalPrice >= 5000 ? 500 : 0;

  const grandTotal =
    totalPrice + deliveryFee - discount;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      alert("Please complete all required fields.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderId = `FM-${Date.now()}`;

    const order = {
      id: orderId,
      customer: form,
      items: cartItems,
      subtotal: totalPrice,
      deliveryFee,
      discount,
      total: grandTotal,
      paymentMethod: form.payment,
      deliveryMethod: form.delivery,
      status: "Pending",
      createdAt: new Date().toLocaleString(),
    };

    addOrder(order);

    localStorage.setItem("latest-order-id", orderId);

    clearCart();

    navigate("/order-success");
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Shipping Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                className="border rounded-xl p-4"
                placeholder="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Province"
                name="province"
                value={form.province}
                onChange={handleChange}
              />

              <input
                className="border rounded-xl p-4"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />

              <input
                className="border rounded-xl p-4 md:col-span-2"
                placeholder="Street Address"
                name="address"
                value={form.address}
                onChange={handleChange}
              />

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Delivery Method
              </h2>

              <label className="flex items-center gap-3 mb-4">
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={form.delivery === "standard"}
                  onChange={handleChange}
                />
                Standard Delivery (2–4 Days) — Rs.300
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={form.delivery === "express"}
                  onChange={handleChange}
                />
                Express Delivery (Next Day) — Rs.700
              </label>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Payment Method
              </h2>

              <label className="flex items-center gap-3 mb-4">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-3 mb-4">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={handleChange}
                />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={form.payment === "paypal"}
                  onChange={handleChange}
                />
                PayPal
              </label>

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-28">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <>
                <div className="space-y-4">

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between"
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

                <hr className="my-6" />

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs. {totalPrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>Rs. {deliveryFee}</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>- Rs. {discount}</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>Rs. {grandTotal}</span>
                  </div>

                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  Place Order
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Checkout;