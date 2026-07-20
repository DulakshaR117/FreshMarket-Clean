import { FiTrash2 } from "react-icons/fi";

function DeleteDialog({
  isOpen,
  product,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <FiTrash2
              size={28}
              className="text-red-600"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-3">
          Delete Product
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Are you sure you want to delete{" "}
          <strong>{product?.name}</strong>?
          <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteDialog;