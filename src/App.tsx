import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "./Components/ProductsList";

export interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function App() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [cartCount, setCartCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [lastAdded, setLastAdded] = useState<string>("");

  const handleAddToCart = (productTitle: string) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(productTitle);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await axios.get<ProductData[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
          console.error("Error fetching products:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {}
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Proyecto Final</h1>
        <div className="text-lg">
          🛒 Carrito: <span className="font-semibold">{cartCount}</span>
        </div>
      </header>

      {}
      {showModal && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          ✅ "{lastAdded}" fue añadido al carrito
        </div>
      )}

      {}
      <ProductsList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
