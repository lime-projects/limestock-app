import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ID</Language>
          <SearchContainer>
            <Input
              type="search"
              name="search"
              id="search"
              placeholder="Search.."
            />
            <Search style={{ fontSize: 16, color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LIME STOCKS</Logo>
        </Center>
        <Right>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
