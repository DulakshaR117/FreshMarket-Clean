import { useNavigate, useSearchParams } from "react-router-dom";

function SortDropdown() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedSort = searchParams.get("sort") || "";
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const handleSortChange = (e) => {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (search) params.set("search", search);

    if (e.target.value) {
      params.set("sort", e.target.value);
    }

    navigate(`/products?${params.toString()}`);
  };

  return (
    <select
      value={selectedSort}
      onChange={handleSortChange}
      className="border rounded-full px-5 py-3 outline-none"
    >
      <option value="">Featured</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="name-asc">Name: A-Z</option>
      <option value="name-desc">Name: Z-A</option>
    </select>
  );
}

export default SortDropdown;