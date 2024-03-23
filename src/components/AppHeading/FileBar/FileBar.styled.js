import styled from "styled-components";

const StyledFileBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2.4rem;
  margin-right: 1.6rem;
  align-items: center;

`;


StyledFileBar.img = styled.img`
  height: 2rem;
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;

export default StyledFileBar;