import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  color: white;
  gap: 0.8rem;
  background-color: ${(props) => props.theme.btnIdle};
  color: ${(props) => props.theme.headingColor};
  font-weight: 400;
  padding: ${(props) => (props.small ? "1.6rem" : "1.6rem 3.2rem")};
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: ${(props) => props.theme.btnHover};
    cursor: pointer;
  }
`;

export default StyledButton;
