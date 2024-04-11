import iconMenu from "../../../assets/icon-menu.svg";
import iconClose from "../../../assets/icon-close.svg";
import StyledMenuButton from "./MenuButton.styled.js";

const MenuBoutton = ({ onClick, isMenuOpen }) => (
  <StyledMenuButton onClick={onClick}>
    <StyledMenuButton.StyledImg
      src={isMenuOpen ? iconClose : iconMenu}
      alt="Menu Icon"
    />
  </StyledMenuButton>
);

export default MenuBoutton;
