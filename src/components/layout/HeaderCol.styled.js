import styled from "styled-components";

const StyledHeaderCol = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  min-height: 4.2rem;
  background-color:${(props) => props.theme.menuBackground} ;
  font-size: 1.4rem;
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: 400 ;
  letter-spacing: 0.2rem;


`;

export default StyledHeaderCol;