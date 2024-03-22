import StyledAppHeader from "./AppHeader.styled.js"
import MenuBoutton from "./MenuButton/MenuButton.jsx";
import LogoHeader from "./LogoHeader/LogoHeader.jsx";

const AppHeader= ( ) => {

  return  <StyledAppHeader>
      <MenuBoutton/>
      <LogoHeader/>
    </StyledAppHeader>

}

export default AppHeader;