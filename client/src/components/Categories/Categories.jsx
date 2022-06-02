import React, { useEffect, useState } from "react";

import { Container } from "./CategoriesStyles";
import CategoryItem from "./CategoryItem";
import { urlProducts } from "../../api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${urlProducts}/categories`)
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
