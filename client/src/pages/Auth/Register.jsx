import React from "react";
import {
  Agreement,
  Button,
  Container,
  Title,
  Form,
  Input,
  Wrapper,
} from "./RegisterStyles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            enim iste ipsam praesentium quia. Animi error voluptatem dolorem
            excepturi perferendis rerum autem id atque est!
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
