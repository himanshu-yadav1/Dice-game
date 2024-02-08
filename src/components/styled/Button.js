import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`  //OutlineButton inhert properties from Button but changes are overwritten
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover{
    background-color: black;    
    color: white;
    border: 1px solid transparent;
  }
`;

