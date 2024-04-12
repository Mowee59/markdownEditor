import styled from "styled-components";
import { ReactSVG } from "react-svg";

const StyledIcon = styled(ReactSVG)`
  fill: #7c8187;
  transition: fill 0.2s ease-in;

  &:hover {
    cursor: pointer;
    fill: #e46643;
  }
`;

export default StyledIcon;
