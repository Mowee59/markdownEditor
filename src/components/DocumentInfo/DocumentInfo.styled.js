import styled, { ThemeConsumer } from "styled-components";

const  StyledDocumentInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 12rem;
  display: flex;
  justify-content: left;
`;

StyledDocumentInfo.img = styled.img`
  height: 1.6rem;
  object-fit: contain;

`;

StyledDocumentInfo.ul = styled.ul`
  color: white;
  list-style: none;
  padding: 0;
  margin: 0  1.6rem;
  
  li {
    margin: 5px 0;;
  }

`;

StyledDocumentInfo.ul.firstLine = styled.li`
  font-family: 'Roboto', sans-serif;
  color: #C1C4CB;
  font-weight: 300;
  font-size: 1.3rem;
  letter-spacing: 1px;
`;

StyledDocumentInfo.ul.secondLine = styled.li`
  
  margin: 4px 0;

  input {
    border: none;
    background-color: inherit;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #FFF;
    outline: none;
    caret-color: #E46643;
    caret-shape: bar;

  }
`;


export default StyledDocumentInfo;