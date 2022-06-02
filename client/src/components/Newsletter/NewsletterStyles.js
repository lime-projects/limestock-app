import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 60px;
`;

export const Desc = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d1d4c9;
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #0d7377;
  color: white;
  cursor: pointer;
`;
