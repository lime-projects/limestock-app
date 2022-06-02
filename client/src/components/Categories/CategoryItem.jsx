import React from "react";
import { Container } from "./CategoryItemStyles";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <h1>{category}</h1>
    </Container>
  );
};

export default CategoryItem;
