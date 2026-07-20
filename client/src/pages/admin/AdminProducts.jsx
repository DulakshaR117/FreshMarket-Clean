import { FiPlus } from "react-icons/fi";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import SearchBar from "../../components/admin/SearchBar";
import ProductTable from "../../components/admin/ProductTable";
import ProductModal from "../../components/admin/ProductModal";
import DeleteDialog from "../../components/admin/DeleteDialog";

import adminProducts from "../../data/adminProducts";

function AdminProducts() {
  const [products, setProducts] = useState(adminProducts);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // ==========================
  // Add Product
  // ==========================
  const handleAddProduct = (newProduct) => {
    const product = {
      id: Date.now(),
      status: "Active",
      image: "https://via.placeholder.com/60",
      ...newProduct,
    };

    setProducts((prevProducts) => [...prevProducts, product]);

    setIsModalOpen(false);

    toast.success("Product added successfully!");
  };

  // ==========================
  // Edit Product
  // ==========================
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // ==========================
  // Update Product
  // ==========================
  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedProduct.id
          ? {
              ...product,
              ...updatedProduct,
            }
          : product
      )
    );

    setSelectedProduct(null);
    setIsModalOpen(false);

    toast.success("Product updated successfully!");
  };

  // ==========================
  // Delete Product
  // ==========================
  const handleDeleteClick = (product) => {
    setDeleteProduct(product);
  };

  const handleDeleteProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.filter(
        (product) => product.id !== deleteProduct.id
      )
    );

    setDeleteProduct(null);

    toast.success("Product deleted successfully!");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <button
          onClick={() => {
            setSelectedProduct(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition-all duration-200 hover:scale-105"
        >
          <FiPlus />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Table */}
      <ProductTable
        products={filteredProducts}
        onEdit={handleEditProduct}
        onDelete={handleDeleteClick}
      />

      {/* Add / Edit Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        mode={selectedProduct ? "edit" : "add"}
        product={selectedProduct}
        onSave={
          selectedProduct
            ? handleUpdateProduct
            : handleAddProduct
        }
      />

      {/* Delete Confirmation Dialog */}
      <DeleteDialog
        isOpen={!!deleteProduct}
        product={deleteProduct}
        onCancel={() => setDeleteProduct(null)}
        onConfirm={handleDeleteProduct}
      />
    </div>
  );
}

export default AdminProducts;