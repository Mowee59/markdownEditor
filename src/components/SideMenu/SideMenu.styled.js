import styled from "styled-components";

const StyledSideMenu = styled.aside`
  height: 100vh;
  flex-shrink: 0;
  width: 25rem;
  background-color: ${(props) => props.theme.menuBackground};
`;

export default StyledSideMenu;
