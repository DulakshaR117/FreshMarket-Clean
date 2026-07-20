import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

function ProductModal({
  isOpen,
  onClose,
  onSave,
  mode = "add",
  product = null,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Fruits",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (mode === "edit" && product) {
      setFormData({
        name: product.name || "",
        category: product.category || "Fruits",
        price: product.price || "",
        stock: product.stock || "",
        description: product.description || "",
        image: product.image || "",
      });
    } else {
      setFormData({
        name: "",
        category: "Fruits",
        price: "",
        stock: "",
        description: "",
        image: "",
      });
    }
  }, [mode, product, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert("Product name is required.");
      return;
    }

    if (!formData.price) {
      alert("Price is required.");
      return;
    }

    if (!formData.stock) {
      alert("Stock is required.");
      return;
    }

    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            {mode === "edit" ? "Edit Product" : "Add Product"}
          </h2>

          <button onClick={onClose}>
            <FiX size={24} />
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium">
              Product Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>Fruits</option>
              <option>Vegetables</option>
            </select>

          </div>

          <div>
            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

        </div>

        <div className="mt-5">

          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

        </div>

        <div className="mt-5">

          <label className="block mb-2 font-medium">
            Product Image
          </label>

          <input type="file" />

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            {mode === "edit" ? "Update Product" : "Save Product"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;