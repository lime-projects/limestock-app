import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterContainer,
  FilterTitle,
  FilterVariant,
  FilterVariantOption,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./ProductDetailStyles";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

const ProductDetail = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Product Detail</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            velit vel neque minus similique obcaecati suscipit tempore
            laboriosam molestias dolore.
          </Desc>
          <Price>20000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Variant</FilterTitle>
              <FilterVariant>
                <FilterVariantOption>1</FilterVariantOption>
                <FilterVariantOption>2</FilterVariantOption>
              </FilterVariant>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircle />
              <Amount>1</Amount>
              <AddCircle />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
