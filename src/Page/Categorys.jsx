import React, { useEffect, useState } from "react";

import Loading from "../Layout/Loadding";

const Categorys = () => {
  const [Category, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
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
    <div className="categories-container container mx-auto px-10 py-5 ">
      <h2 className="text-3xl font-semibold text-center mb-6">Product Categories</h2>
      <div className="category-list grid grid-cols-3  gap-6 justify-center items-center align-middle flex-wrap   ">
        {Category.map((categorys, index) => (
          <div key={index} className="category-card bg-gray-100 hover:bg-black hover:text-white p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold">{categorys}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categorys;
