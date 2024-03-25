import styled from "styled-components";

const StyledThemeSwitch = styled.input`
    appearance: none;
    position: relative;
    width: 4.8rem;
    height: 2.4rem;
    border-radius: 2.5rem;
    background-color: #5a6069;
    transition: background .3s;
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
      transition: left .3s;
    }

    

    &:checked::after {
      left: 70%;
    }
    `;


export default StyledThemeSwitch;