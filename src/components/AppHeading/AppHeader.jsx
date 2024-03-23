import StyledAppHeader from "./AppHeader.styled.js"
import MenuBoutton from "./MenuButton/MenuButton.jsx";
import LogoHeader from "./LogoHeader/LogoHeader.jsx";
import VerticalDivider from "./VerticalDivider/VerticalDivider.jsx";
import FIleBar from "./FileBar/FileBar.jsx";

const AppHeader= ( ) => {

  return  <StyledAppHeader>
      <MenuBoutton/>
      <LogoHeader/>
      <VerticalDivider/>
      <FIleBar/>
    </StyledAppHeader>

}

export default AppHeader;