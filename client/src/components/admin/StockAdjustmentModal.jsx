import { useState, useEffect } from "react";

function StockAdjustmentModal({
  isOpen,
  onClose,
  onSave,
  mode,
  inventory,
}) {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (isOpen) {
      setQuantity("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!quantity || Number(quantity) <= 0) return;

    onSave(Number(quantity));
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-2">
          {mode === "increase"
            ? "Increase Stock"
            : "Decrease Stock"}
        </h2>

        <p className="text-gray-600 mb-5">
          <strong>{inventory?.productName}</strong>
        </p>

        <label className="block mb-2 font-medium">
          Quantity
        </label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className={`px-5 py-2 rounded-lg text-white ${
              mode === "increase"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {mode === "increase" ? "Increase" : "Decrease"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StockAdjustmentModal;