import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  } 



  #root {
    display: flex;

    
     
  }

  
 //TODO Style BLockquote
  


  body {
   
    font-family: 'Roboto', Sans-Serif;
    font-weight: 400;
    background-color: ${(props) => props.theme.mainBackground};
    color:${(props) => props.theme.textColor} ;
    scrollbar-color: ${(props) => props.theme.mainBackground} ${(props) =>
  props.theme.menuBackground} ;
    scrollbar-width: thin;
    overflow: hidden
  }

  html {
  /* font-size: 10px; */
  font-size: 62.5%;
  line-height: 1;
  font-weight: 400;
}


`;

export default GlobalStyle;
