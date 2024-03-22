import styled from "styled-components";



const StyledMenuButton = styled.button`
    width: 7.2rem;
    height: 7.2rem;
    background-color: ${(props) => props.theme.menuButtonBackground};
    border: none;

    &:hover{
      cursor: pointer;
    }
    
`;

 StyledMenuButton.StyledImg = styled.img`
  width: 3rem;
`;

export default StyledMenuButton;