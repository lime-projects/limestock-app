import React from "react";
import {
  Button,
  Container,
  Title,
  Form,
  Input,
  Wrapper,
  Link,
} from "./LoginStyles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link>Forget Password?</Link>
          <Link>Do not have a account? Register Here</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
