import iconMenu from "../../../assets/icon-menu.svg";
import iconClose from "../../../assets/icon-close.svg";
import StyledMenuButton from "./MenuButton.styled.js";

const MenuBoutton = ({onClick}) => (
  <StyledMenuButton onClick={onClick}>
    <StyledMenuButton.StyledImg src={iconMenu} alt="Menu Icon"/>
  </StyledMenuButton>
);

export default MenuBoutton;