function ProductImage({ product }) {
  if (!product) {
    return (
      <div className="bg-green-50 rounded-3xl flex items-center justify-center h-[600px]">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 rounded-3xl flex items-center justify-center h-[600px] group overflow-hidden">

      <div className="text-[220px] transition duration-500 group-hover:scale-110">

        {product.image}

      </div>

    </div>
  );
}

export default ProductImage;