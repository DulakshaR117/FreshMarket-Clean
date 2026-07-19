import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter your email and password.");
      return;
    }

    // Mock login (replace with API later)
    login({
      id: 1,
      name: "FreshMarket Customer",
      email: form.email,
    });

    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue shopping.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Email */}
          <div>
            <label className="font-medium text-gray-700">
              Email Address
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4">
              <FiMail className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-4 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="font-medium text-gray-700">
              Password
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4">
              <FiLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-500" />
                ) : (
                  <FiEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;