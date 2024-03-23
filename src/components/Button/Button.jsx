import StyledButton from "./Button.styled.js"

const Button = ({textButton, iconButton, small = false}) => (
  <StyledButton small = {small}>
    {iconButton && <img src={iconButton} alt = 'Boutton Icon'/>}
    {textButton}  
  </StyledButton>
);

export default Button;
