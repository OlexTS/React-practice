import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ $isHide}) => ($isHide ? "blue" : "black")};
  width: 300px;

  &:hover {
    background-color: lightgreen;
  }
  div > h5 {
    color: white;
  }
`;
export const Image = styled.img`
  /* background-color: #8d6060; */
  width: 300px;
`;
