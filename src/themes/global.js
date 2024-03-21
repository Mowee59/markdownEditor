
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body {
   
    font-family: 'Roboto', Sans-Serif;
    background-color: ${(props) => props.theme.mainBackground};
    color:${(props) => props.theme.textColor} ;
  }

  html {
  /* font-size: 10px; */
  font-size: 62.5%;
  line-height: 1;
  font-weight: 400;
}


`;

export default GlobalStyle;
