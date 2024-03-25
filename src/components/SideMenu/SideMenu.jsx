import Button from "../Button/Button.jsx";
import StyledSideMenu from "./SideMenu.styled.js";

const SideMenu = () => {

  return(
  <StyledSideMenu >
    <h1>My documents</h1>
    <Button textButton='+ New document'/>
  </StyledSideMenu>
  );
}

export default SideMenu;
