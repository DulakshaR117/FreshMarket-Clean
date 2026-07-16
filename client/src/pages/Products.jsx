import { useSearchParams } from "react-router-dom";
import ProductHero from "../components/products/ProductHero";
import SearchBar from "../components/products/SearchBar";
import CategoryFilter from "../components/products/CategoryFilter";
import SortDropdown from "../components/products/SortDropdown";
import ProductCard from "../components/products/ProductCard";
import products from "../data/products";



function Products() {
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

const filteredProducts = selectedCategory
  ? products.filter(
      (product) => product.category === selectedCategory
    )
  : products;

return (
    <>
      <ProductHero />

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {selectedCategory && (
  <div className="mb-8">
    <h2 className="text-3xl font-bold">
      {selectedCategory}
    </h2>

    <p className="text-gray-500 mt-2">
      Showing all {selectedCategory.toLowerCase()} products.
    </p>
  </div>
)}

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <SearchBar />

            <SortDropdown />

          </div>

          <div className="mt-8">

            <CategoryFilter />

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Products;