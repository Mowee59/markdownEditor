import styled from "styled-components";

const StyledMainLayout = styled.main`
  display: flex;

  /* grid-area: 2 / 2 / 6 / 6; */
`;

export const StyledLayoutCol = styled.section`
  flex: 1;
  max-width: 50%;

  &:first-child {
    visibility: ${(props) => (props.$previewMode ? "collapse" : "visible")};
  }

  &:not(:last-child) {
    border-right: 0.1rem solid ${(props) => props.theme.border};
  }
`;

export default StyledMainLayout;
