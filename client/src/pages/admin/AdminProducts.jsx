import { FiPlus } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import SearchBar from "../../components/admin/SearchBar";
import ProductTable from "../../components/admin/ProductTable";
import ProductModal from "../../components/admin/ProductModal";
import DeleteDialog from "../../components/admin/DeleteDialog";

import productService from "../../api/productService";
import categoryService from "../../api/categoryService";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  // ==========================
  // Load Products
  // ==========================
  const loadProducts = async () => {
    try {
      setLoading(true);

      const data = await productService.getAll();

      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Load Categories
  // ==========================
  const loadCategories = async () => {
    try {
      const data = await categoryService.getAll();

      setCategories(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load categories");
    }
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  // ==========================
  // Search
  // ==========================
  const filteredProducts = useMemo(() => {
    const keyword = search.toLowerCase();

    return products.filter((product) => {
      return (
        product.name?.toLowerCase().includes(keyword) ||
        product.description?.toLowerCase().includes(keyword) ||
        product.categoryName?.toLowerCase().includes(keyword)
      );
    });
  }, [products, search]);

  // ==========================
  // Add Product
  // ==========================
  const handleAddProduct = async (newProduct) => {
    try {
      await productService.create(newProduct);

      await loadProducts();

      setIsModalOpen(false);

      toast.success("Product added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    }
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
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await productService.update(selectedProduct.id, updatedProduct);

      await loadProducts();

      setSelectedProduct(null);
      setIsModalOpen(false);

      toast.success("Product updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
    }
  };

  // ==========================
  // Delete Dialog
  // ==========================
  const handleDeleteClick = (product) => {
    setDeleteProduct(product);
  };

  // ==========================
  // Delete Product
  // ==========================
  const handleDeleteProduct = async () => {
    try {
      await productService.delete(deleteProduct.id);

      await loadProducts();

      setDeleteProduct(null);

      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Products</h1>

        <button
          onClick={() => {
            setSelectedProduct(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
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

      {/* Product Table */}
      {loading ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          Loading products...
        </div>
      ) : (
        <ProductTable
          products={filteredProducts}
          onEdit={handleEditProduct}
          onDelete={handleDeleteClick}
        />
      )}

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        mode={selectedProduct ? "edit" : "add"}
        product={selectedProduct}
        categories={categories}
        onSave={
          selectedProduct
            ? handleUpdateProduct
            : handleAddProduct
        }
      />

      {/* Delete Dialog */}
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