import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";

import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lime Stocks</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quis
          delectus nulla a beatae eos dolor eum explicabo harum voluptatum.
        </Desc>
        <SocialContainer>
          <SocialIcon color="4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E1306C">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Electronics</ListItem>
          <ListItem>Jewelry</ListItem>
          <ListItem>Men's Clothing</ListItem>
          <ListItem>Women's Clothing</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: 10 }} /> Dolopo Madiun 63174
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: 10 }} /> +62 897 7903 145
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: 10 }} /> contact@limestocks.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
