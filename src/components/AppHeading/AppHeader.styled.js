import styled from "styled-components";

const StyledAppHeader = styled.header`
  display: flex;
  height: 7.2rem;
  width: 100%;
  background-color: ${(props) => props.theme.appHeaderBackground};

`;

export default StyledAppHeader;