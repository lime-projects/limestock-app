import { Send } from "@mui/icons-material";
import React from "react";
import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from "./NewsletterStyles";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Dapatkan Informasi Harga Terbaru dari Produk Favorit Kamu.</Desc>
      <InputContainer>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email.."
        />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
