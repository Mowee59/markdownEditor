import StyledMainLayout, { StyledLayoutCol } from "./MainLayout.styles.js";

const MainLayout = ({ children }) => {
  return <StyledMainLayout>{children}</StyledMainLayout>;
};

MainLayout.Col = ({ children, previewMode }) => (
  <StyledLayoutCol $previewMode={previewMode}>{children}</StyledLayoutCol>
);

export default MainLayout;
