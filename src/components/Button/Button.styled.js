import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.btnIdle};
  color: ${(props) => props.theme.headingColor};
  width: 100%;
  font-weight: 400;
  padding: 16px 32px;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  
  &:hover{
    background-color: ${(props) => props.theme.btnHover};
    cursor: pointer;

  }
`;



export default StyledButton;