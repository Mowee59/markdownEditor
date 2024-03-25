import StyledFlexWrapper from "./FlexWrapper.styled.js";

// Wrapper for the app without the menu, so when the menu opens it gerts pushed out of screen
const FlexWrapper = ({children}) => (
  <StyledFlexWrapper>
    {children}
  </StyledFlexWrapper>

);

export default FlexWrapper;