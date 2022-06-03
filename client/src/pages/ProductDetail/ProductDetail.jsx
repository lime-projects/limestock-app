import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "./ProductDetailStyles";

const ProductDetail = () => {
  return (
    <Container>
      <Navbar />
      <h1>Product Detail</h1>
      <Footer />
    </Container>
  );
};

export default ProductDetail;
