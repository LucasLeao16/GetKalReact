import styled from "styled-components";
export const Container = styled.article`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;
