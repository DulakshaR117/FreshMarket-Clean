import { FiEdit, FiTrash2 } from "react-icons/fi";

function ProductRow({ product, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-14 h-14 rounded object-cover"
        />
      </td>

      <td className="p-4 font-medium">
        {product.name}
      </td>

      <td className="p-4">
        {product.category}
      </td>

      <td className="p-4">
        Rs. {product.price}
      </td>

      <td className="p-4">
        {product.stock}
      </td>

      <td className="p-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {product.status}
        </span>
      </td>

      <td className="p-4">
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(product)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            title="Edit Product"
          >
            <FiEdit size={18} />
          </button>

          <button
            onClick={() => onDelete(product)}
            className="text-red-600 hover:text-red-800 transition-colors"
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