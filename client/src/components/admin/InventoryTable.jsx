import {
  FiEdit2,
  FiTrash2,
  FiPlusCircle,
  FiMinusCircle,
} from "react-icons/fi";

function InventoryTable({
  inventories,
  onEdit,
  onDelete,
  onIncrease,
  onDecrease,
}) {
  const getStatusBadge = (item) => {
    if (item.quantityInStock === 0) {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
          Out of Stock
        </span>
      );
    }

    if (item.isLowStock) {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
          Low Stock
        </span>
      );
    }

    return (
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
        In Stock
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Product</th>
            <th className="text-center p-4">Stock</th>
            <th className="text-center p-4">Reorder Level</th>
            <th className="text-center p-4">Status</th>
            <th className="text-center p-4">Last Updated</th>
            <th className="text-center p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {inventories.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="text-center py-10 text-gray-500"
              >
                No inventory found.
              </td>
            </tr>
          ) : (
            inventories.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {item.productName}
                </td>

                <td className="text-center">
                  {item.quantityInStock}
                </td>

                <td className="text-center">
                  {item.reorderLevel}
                </td>

                <td className="text-center">
                  {getStatusBadge(item)}
                </td>

                <td className="text-center">
                  {new Date(item.lastUpdated).toLocaleDateString()}
                </td>

                <td>
                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onIncrease(item)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FiPlusCircle size={18} />
                    </button>

                    <button
                      onClick={() => onDecrease(item)}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      <FiMinusCircle size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEdit2 size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(item)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;