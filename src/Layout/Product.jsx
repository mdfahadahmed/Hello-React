import React, { useEffect, useState } from "react";

import Loading from "../Layout/Loadding";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div> <Loading/> </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-section container m-auto justify-center items-center align-middle flex-wrap">
      <div className="product-title text-center">
        <h2 className="text-black text-5xl font-bold">All Products</h2>
      </div>
      <div className="all-product px-10 py-5">
        <ul className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <li className="bg-white p-5 rounded-lg" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <strong className="text-xl text-green-500">${product.price}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
