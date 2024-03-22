import styled from "styled-components";


const StyledMainLayout = styled.main`
  display: flex;
  height: 100vh;
`;


export const StyledLayoutCol = styled.section`
  flex: 1;
  

  &:not(:last-child){

    border-right: 0.1rem solid ${(props) => props.theme.border}
    

  }
`;

export default StyledMainLayout;