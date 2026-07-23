import { FiPlus } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import SearchBar from "../../components/admin/SearchBar";
import InventoryTable from "../../components/admin/InventoryTable";
import InventoryModal from "../../components/admin/InventoryModal";
import StockAdjustmentModal from "../../components/admin/StockAdjustmentModal";
import DeleteDialog from "../../components/admin/DeleteDialog";

import inventoryService from "../../api/inventoryService";
import productService from "../../api/productService";

function AdminInventory() {
  const [inventories, setInventories] = useState([]);
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [deleteInventory, setDeleteInventory] = useState(null);

  // Stock adjustment
  const [adjustInventory, setAdjustInventory] = useState(null);
  const [adjustMode, setAdjustMode] = useState("increase");

  const loadInventory = async () => {
    try {
      setLoading(true);

      const data = await inventoryService.getAll();

      setInventories(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load inventory");
    } finally {
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      const data = await productService.getAll();

      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    loadInventory();
    loadProducts();
  }, []);

  const filteredInventory = useMemo(() => {
    const keyword = search.toLowerCase();

    return inventories.filter((item) =>
      item.productName.toLowerCase().includes(keyword)
    );
  }, [inventories, search]);

  const handleAdd = async (data) => {
    try {
      await inventoryService.create(data);

      await loadInventory();

      setIsModalOpen(false);

      toast.success("Inventory created successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data ?? "Failed to create inventory");
    }
  };

  const handleUpdate = async (data) => {
    try {
      await inventoryService.update(selectedInventory.id, data);

      await loadInventory();

      setSelectedInventory(null);
      setIsModalOpen(false);

      toast.success("Inventory updated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update inventory");
    }
  };

  const handleAdjustStock = async (quantity) => {
    try {
      if (adjustMode === "increase") {
        await inventoryService.increase(adjustInventory.id, quantity);
      } else {
        await inventoryService.decrease(adjustInventory.id, quantity);
      }

      await loadInventory();

      setAdjustInventory(null);

      toast.success(
        adjustMode === "increase"
          ? "Stock increased successfully"
          : "Stock decreased successfully"
      );
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data || "Failed to update stock");
    }
  };

  const handleDelete = async () => {
    try {
      await inventoryService.delete(deleteInventory.id);

      await loadInventory();

      setDeleteInventory(null);

      toast.success("Inventory deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete inventory");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Inventory</h1>

        <button
          onClick={() => {
            setSelectedInventory(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          <FiPlus />
          Add Inventory
        </button>
      </div>

      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          Loading inventory...
        </div>
      ) : (
        <InventoryTable
          inventories={filteredInventory}
          onEdit={(item) => {
            setSelectedInventory(item);
            setIsModalOpen(true);
          }}
          onDelete={setDeleteInventory}
          onIncrease={(item) => {
            setAdjustInventory(item);
            setAdjustMode("increase");
          }}
          onDecrease={(item) => {
            setAdjustInventory(item);
            setAdjustMode("decrease");
          }}
        />
      )}

      <InventoryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedInventory(null);
        }}
        mode={selectedInventory ? "edit" : "add"}
        inventory={selectedInventory}
        products={products}
        onSave={selectedInventory ? handleUpdate : handleAdd}
      />

      <StockAdjustmentModal
        isOpen={!!adjustInventory}
        inventory={adjustInventory}
        mode={adjustMode}
        onClose={() => setAdjustInventory(null)}
        onSave={handleAdjustStock}
      />

      <DeleteDialog
        isOpen={!!deleteInventory}
        product={deleteInventory}
        onCancel={() => setDeleteInventory(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default AdminInventory;