import { Children } from "react"
import StyledButton from "./Button.styled.js"

const Button = ({children}) => (
  <StyledButton>
    {children}
  </StyledButton>
);

export default Button;
