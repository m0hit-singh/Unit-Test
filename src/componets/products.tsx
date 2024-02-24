import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type TProduct = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const SelectedCategory = useSelector(
    (state: RootState) => state.category.category
  );

  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/category/${SelectedCategory}`;
    async function getProducts() {
      fetch(URL)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
    getProducts();
  }, [SelectedCategory]);
  return (
    <div>
      <h4>Products</h4>
      {products &&
        products.map((product: TProduct) => (
          <div key={product.id} className="container">
            <h5>{product.title}</h5>
            <img src={product.image} alt={product.title} height={150} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
    </div>
  );
};
