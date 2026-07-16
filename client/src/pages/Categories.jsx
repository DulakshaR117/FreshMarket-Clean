import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";

const categories = [
  {
    name: "Vegetables",
    image: "🥬",
    count: "25 Products",
  },
  {
    name: "Fruits",
    image: "🍎",
    count: "18 Products",
  },
  {
    name: "Dairy",
    image: "🥛",
    count: "12 Products",
  },
  {
    name: "Bakery",
    image: "🥖",
    count: "15 Products",
  },
  {
    name: "Meat",
    image: "🥩",
    count: "10 Products",
  },
  {
    name: "Drinks",
    image: "🥤",
    count: "20 Products",
  },
];

function Categories() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-widest text-green-100">
            Browse Products
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Shop by Category
          </h1>

          <p className="mt-5 text-lg text-green-100 max-w-2xl">
            Find fresh vegetables, fruits, dairy products and more
            from trusted local farmers.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group bg-white rounded-3xl shadow hover:shadow-xl transition duration-300 p-8"
            >

              <div className="flex justify-between items-center">

                <div className="text-6xl">
                  {category.image}
                </div>

                <FiShoppingBag
                  className="text-green-500"
                  size={26}
                />

              </div>

              <h2 className="text-2xl font-bold mt-6">
                {category.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {category.count}
              </p>

              <div className="flex items-center gap-2 mt-6 text-green-600 font-semibold">

                Shop Now

                <FiArrowRight className="group-hover:translate-x-2 transition" />

              </div>

            </Link>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Categories;