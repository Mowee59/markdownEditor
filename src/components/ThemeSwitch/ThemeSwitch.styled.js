import styled from "styled-components";
import  {ReactSVG}  from "react-svg"

  const StyledThemeSwitch = styled.div`
    display: flex;
    
    justify-items: center;
    align-items: center;
    height: 2.4rem;
    margin: auto auto 0 auto;
    
`;

 StyledThemeSwitch.DarkIcon = styled(ReactSVG)`
    fill : ${(props) => props.theme === 'light' ? '#5A6069' : '#FFF'};
    transition: fill 0.3s ease-in;
   `;

 StyledThemeSwitch.LightIcon = styled(ReactSVG)`
    fill : ${(props) => props.theme === 'light' ? '#FFF' : '#5A6069'};
    transition: fill 0.3s ease-in;
   `;



 StyledThemeSwitch.checkBox = styled.input`
    margin: 0 10px;
    appearance: none;
    position: relative;
    width: 4.8rem;
    height: 2.4rem;
    border-radius: 2.5rem;
    background-color: #5a6069;
    outline: none;
    cursor: pointer;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      height: 1.2rem;
      width: 1.2rem;
      background-color: white;
      transition: left .3s ease-out;
    }

    

    &:checked::after {
      left: 70%;
    }
    `;


  


export default StyledThemeSwitch;