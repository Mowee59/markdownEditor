import Button from "../Button/Button.jsx";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import DocumentList from "./DocumentList/DocumentList.jsx";
import StyledSideMenu from "./SideMenu.styled.js";

const SideMenu = ({ theme, setTheme }) => {

  


  return(
  <StyledSideMenu >
    <h1>My documents</h1>
    <Button textButton='+ New document'/>
    <DocumentList/>
    <ThemeSwitch theme = {theme} setTheme={setTheme}/>
    
  </StyledSideMenu>
  );
}

export default SideMenu;
