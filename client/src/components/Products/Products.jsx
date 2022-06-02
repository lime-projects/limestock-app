import React, { useEffect, useState } from "react";

import Product from "./Product";
import { Container } from "./ProductsStyles";
import { urlProducts } from "../../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(urlProducts)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
