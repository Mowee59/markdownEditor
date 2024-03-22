import iconMenu from "../../../assets/icon-menu.svg";
import StyledMenuButton from "./MenuButton.styled.js";

const MenuBoutton = () => (
  <StyledMenuButton>
    <StyledMenuButton.StyledImg src={iconMenu} alt="Menu Icon"/>
  </StyledMenuButton>
);

export default MenuBoutton;