import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/api/v1/products");

      const data = await response.json();
      setProducts(data.data);
      console.log(data);
    };

    fetchProducts();
  }, []);
  return (
    <div className="flex mt-30">
      {products.map((product) => {
        return <ProductCard key={product.id} card={product} />;
      })}
    </div>
  );
};

export default Home;
