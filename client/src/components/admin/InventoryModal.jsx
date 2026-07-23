import { useEffect, useState } from "react";

function InventoryModal({
  isOpen,
  onClose,
  mode,
  inventory,
  products,
  onSave,
}) {
  const [formData, setFormData] = useState({
    productId: "",
    quantityInStock: "",
    reorderLevel: "",
  });

  useEffect(() => {
    if (mode === "edit" && inventory) {
      setFormData({
        productId: inventory.productId,
        quantityInStock: inventory.quantityInStock,
        reorderLevel: inventory.reorderLevel,
      });
    } else {
      setFormData({
        productId: "",
        quantityInStock: "",
        reorderLevel: "",
      });
    }
  }, [inventory, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (mode === "add") {
      onSave({
        productId: formData.productId,
        quantityInStock: Number(formData.quantityInStock),
        reorderLevel: Number(formData.reorderLevel),
      });
    } else {
      onSave({
        quantityInStock: Number(formData.quantityInStock),
        reorderLevel: Number(formData.reorderLevel),
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          {mode === "add" ? "Add Inventory" : "Edit Inventory"}
        </h2>

        <div className="space-y-4">

          {mode === "add" ? (
            <div>
              <label className="block mb-2 font-medium">
                Product
              </label>

              <select
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Product</option>

                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}
                  >
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label className="block mb-2 font-medium">
                Product
              </label>

              <input
                value={inventory?.productName}
                disabled
                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
              />
            </div>
          )}

          <div>
            <label className="block mb-2 font-medium">
              Quantity In Stock
            </label>

            <input
              type="number"
              name="quantityInStock"
              value={formData.quantityInStock}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Reorder Level
            </label>

            <input
              type="number"
              name="reorderLevel"
              value={formData.reorderLevel}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            {mode === "add" ? "Create" : "Update"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default InventoryModal;