import { FiEdit, FiTrash2 } from "react-icons/fi";

function ProductRow({ product, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      {/* Product Image */}
      <td className="p-4">
        <img
          src={
            product.image ||
            "https://via.placeholder.com/60?text=No+Image"
          }
          alt={product.name}
          className="w-14 h-14 rounded object-cover border"
        />
      </td>

      {/* Product Name */}
      <td className="p-4 font-medium">
        {product.name}
      </td>

      {/* Category */}
      <td className="p-4">
        {product.categoryName}
      </td>

      {/* Price */}
      <td className="p-4">
        Rs. {Number(product.price).toFixed(2)}
      </td>

      {/* Stock */}
      <td className="p-4">
        {product.stockQuantity}
      </td>

      {/* Status */}
      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            product.stockQuantity > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.stockQuantity > 0
            ? "In Stock"
            : "Out of Stock"}
        </span>
      </td>

      {/* Actions */}
      <td className="p-4">
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(product)}
            className="text-blue-600 hover:text-blue-800"
            title="Edit Product"
          >
            <FiEdit size={18} />
          </button>

          <button
            onClick={() => onDelete(product)}
            className="text-red-600 hover:text-red-800"
            title="Delete Product"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;