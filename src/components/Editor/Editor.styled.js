import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-family: 'Roboto Mono', serif;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;
  padding: 1.6rem;
  min-height: 100vh;
  background: none;
  border: none;
  appearance: none;
  resize: none;
  outline: none;
  color: ${(props) => props.theme.textColor};
  

`;

const EditorDiv = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export  {StyledTextArea, EditorDiv};