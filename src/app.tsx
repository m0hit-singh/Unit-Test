import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from "./componets/category";
import { ProductsList } from "./componets/products";
import { UsersList } from "./componets/users";

export const App = () => {
  return (
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/category" element={<Category />} />
        <Route path="/" element={<UsersList />} />
      </Routes>
  );
};
