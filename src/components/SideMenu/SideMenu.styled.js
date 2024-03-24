import styled from "styled-components";

const StyledSideMenu = styled.aside`
  grid-area: 1 / 1 / 6 / 2;
  height: 100vh;
  width: 25rem;
  background-color: ${(props) => props.theme.menuBackground};
`;

export default StyledSideMenu;
