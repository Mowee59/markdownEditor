import styled from "styled-components";

const StyledAppHeader = styled.header`
  grid-area: 1 / 2 / 2 / 6;
  display: flex;
  height: 7.2rem;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.appHeaderBackground};
`;

export default StyledAppHeader;
