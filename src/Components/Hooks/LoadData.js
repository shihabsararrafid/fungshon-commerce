import { useEffect, useState } from "react";

const LoadData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      setProducts(products);
    };
    fetchData();
  }, []);
  return [products, setProducts];
};
export default LoadData;
