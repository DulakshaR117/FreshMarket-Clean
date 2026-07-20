import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="relative">

      <FiSearch
        className="absolute left-3 top-3 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        className="border rounded-lg pl-10 pr-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

    </div>
  );
}

export default SearchBar;
