import styled from "styled-components";

const StyledSideMenu = styled.aside`
  /* grid-area: 1 / 1 / 6 / 2; */
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: 100vh;
  width: 25rem;
  background-color: ${(props) => props.theme.menuBackground};
  padding: 3.2rem 2.4rem;
  
  h1 {
    color: ${(props) => props.theme.menuTextColor};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
  }
`;

export default StyledSideMenu;
