import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;
