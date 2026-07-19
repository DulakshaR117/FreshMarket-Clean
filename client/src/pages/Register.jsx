import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
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

    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }

    register({
      id: Date.now(),
      name: form.name,
      email: form.email,
    });

    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Create Account 🚀
          </h1>

          <p className="text-gray-500 mt-3">
            Join FreshMarket today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Name */}
          <div>
            <label className="font-medium">Full Name</label>

            <div className="mt-2 flex items-center border rounded-xl px-4">
              <FiUser className="text-gray-400" />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 py-4 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email</label>

            <div className="mt-2 flex items-center border rounded-xl px-4">
              <FiMail className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3 py-4 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="font-medium">Password</label>

            <div className="mt-2 flex items-center border rounded-xl px-4">
              <FiLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;