import type { ProductData } from "../App";

interface ProductCardProps {
  product: ProductData;
  onAddToCart: (productTitle: string) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 bg-white flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 flex-grow">{product.description}</p>
      <p className="font-bold text-lg mt-4 mb-2">Precio: ${product.price}</p>
      <button
        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        onClick={() => onAddToCart(product.title)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
