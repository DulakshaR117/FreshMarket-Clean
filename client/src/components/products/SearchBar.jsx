import { FiSearch } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("search") || "";
  const category = searchParams.get("category");

  const handleSearch = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams();

    if (value.trim()) {
      params.set("search", value);
    }

    if (category) {
      params.set("category", category);
    }

    navigate(`/products?${params.toString()}`);
  };

  return (
    <div className="relative w-full lg:max-w-md">
      <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search fresh products..."
        className="
          w-full
          rounded-full
          border
          px-14
          py-4
          outline-none
          focus:ring-2
          focus:ring-green-500
        "
      />
    </div>
  );
}

export default SearchBar;