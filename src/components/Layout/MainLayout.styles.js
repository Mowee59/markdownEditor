import styled from "styled-components";

const StyledMainLayout = styled.main`
  display: flex;

  /* grid-area: 2 / 2 / 6 / 6; */
`;

export const StyledLayoutCol = styled.section`
  flex: 1;
  max-width: ${(props) => (props.$previewMode ? "100%" : "50%")};

  &:first-child {
    display: ${(props) => (props.$previewMode ? "none" : "block")};
  }

  &:not(:last-child) {
    border-right: 0.1rem solid ${(props) => props.theme.border};
  }
`;

export default StyledMainLayout;
