import { useEffect, useState } from "react";
import {
  FiImage,
  FiTrash2,
  FiUpload,
  FiX,
} from "react-icons/fi";

function ProductModal({
  isOpen,
  onClose,
  onSave,
  mode = "add",
  product = null,
  categories = [],
}) {
const [formData, setFormData] = useState({
  name: "",
  description: "",
  price: "",
  stockQuantity: "",
  categoryId: "",
  image: "",
});

  const [preview, setPreview] = useState("");

useEffect(() => {
  if (mode === "edit" && product) {
    setFormData({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      stockQuantity: product.stockQuantity || "",
      categoryId: product.categoryId || "",
      image: product.image || "",
    });

    setPreview(product.image || "");
  } else {
    setFormData({
      name: "",
      description: "",
      price: "",
      stockQuantity: "",
      categoryId: categories.length ? categories[0].id : "",
      image: "",
    });

    setPreview("");
  }
}, [mode, product, isOpen, categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const removeImage = () => {
    setPreview("");

    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
  };

 const handleSubmit = () => {
  if (!formData.name.trim()) {
    alert("Product name is required.");
    return;
  }

  if (!formData.categoryId) {
    alert("Please select a category.");
    return;
  }

  if (!formData.price || Number(formData.price) <= 0) {
    alert("Please enter a valid price.");
    return;
  }

  if (
    formData.stockQuantity === "" ||
    Number(formData.stockQuantity) < 0
  ) {
    alert("Please enter a valid stock quantity.");
    return;
  }

  const payload = {
    name: formData.name,
    description: formData.description,
    price: Number(formData.price),
    stockQuantity: Number(formData.stockQuantity),
    categoryId: formData.categoryId,
  };

  console.log("Submitting Product:", payload);

  console.log("Payload:", payload);

  onSave(payload);
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto py-10">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            {mode === "edit"
              ? "Edit Product"
              : "Add Product"}
          </h2>

          <button
            onClick={onClose}
            className="hover:text-red-500 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Product Image */}
        <div className="mb-8">
          <label className="block mb-3 font-semibold">
            Product Image
          </label>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
            <div className="flex flex-col items-center">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-56 h-56 object-cover rounded-xl border shadow mb-5"
                />
              ) : (
                <div className="w-56 h-56 bg-gray-100 rounded-xl flex flex-col justify-center items-center text-gray-400 mb-5">
                  <FiImage size={55} />
                  <p className="mt-3 text-sm">
                    No Image Selected
                  </p>
                </div>
              )}

              <label className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <FiUpload size={18} />
                Choose Image

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>

              {preview && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-700"
                >
                  <FiTrash2 />
                  Remove Image
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">
              Product Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

        <select
  name="categoryId"
  value={formData.categoryId}
  onChange={handleChange}
  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
>
  {categories.map((category) => (
    <option
      key={category.id}
      value={category.id}
    >
      {category.name}
    </option>
  ))}
</select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Price (Rs.)
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Available quantity"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter product description..."
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {mode === "edit"
              ? "Update Product"
              : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;