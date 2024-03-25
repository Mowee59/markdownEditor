import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 0.8rem;
  background-color: ${(props) => props.theme.btnIdle};
  color: white;
  font-weight: 400;
  padding: ${(props) => (props.small ? "0 1.6rem" : "0 3.2rem")};
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
