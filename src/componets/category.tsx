import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCategory } from "../redux/reducers";
import { AppDispatch, RootState } from "../redux/store";
import { ProductsList } from "./products";

export const Category = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch<AppDispatch>();
  const cat = useSelector((state: RootState) => state.category.category);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json))
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCategory(e.target.value));
  };
  return (
    <>
      <label>Category: </label>
      <select defaultValue={"placeholder"} onChange={(e) => handleChange(e)}>
        <option value={"placeholder"} disabled>
          Select Category
        </option>
        {category &&
          category.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <ProductsList />
    </>
  );
};
