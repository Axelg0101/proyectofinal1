import type { ProductData } from "../App";
import ProductCard from "./ProductCards";

interface ProductListProps {
  products: ProductData[];
  onAddToCart: (productTitle: string) => void;
}

const ProductsList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
