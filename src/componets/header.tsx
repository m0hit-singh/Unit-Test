import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/category">Category</Link>
      </nav>
    </header>
  );
};
